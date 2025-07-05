-- Create user_profiles table to store user roles and profile information
create table if not exists user_profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  role text check (role in ('driver', 'customer', 'admin')) not null,
  first_name text,
  last_name text,
  phone text,
  created_at timestamp default now(),
  updated_at timestamp default now()
);

-- Enable RLS on user_profiles
alter table user_profiles enable row level security;

-- Drop existing trigger if it exists
drop trigger if exists on_auth_user_created on auth.users;

-- Drop existing function if it exists
drop function if exists public.handle_new_user();

-- Function to automatically create profile on user signup
-- Always creates customer accounts for security (admins/drivers assigned manually)
create or replace function public.handle_new_user()
returns trigger as $$
begin
  insert into public.user_profiles (id, role, first_name, last_name)
  values (new.id, 'customer', new.raw_user_meta_data->>'first_name', new.raw_user_meta_data->>'last_name');
  return new;
end;
$$ language plpgsql security definer;

-- Trigger to create profile when user signs up
create trigger on_auth_user_created
  after insert on auth.users
  for each row execute procedure public.handle_new_user();

-- Create RLS policies for user_profiles
-- Users can read their own profile
create policy "Users can view own profile" on user_profiles
  for select using (auth.uid() = id);

-- Users can update their own profile
create policy "Users can update own profile" on user_profiles
  for update using (auth.uid() = id);

-- Admins can view all profiles
create policy "Admins can view all profiles" on user_profiles
  for select using (
    exists (
      select 1 from user_profiles 
      where id = auth.uid() and role = 'admin'
    )
  );

-- Function to get user role
create or replace function public.get_user_role(user_id uuid default auth.uid())
returns text as $$
begin
  return (select role from user_profiles where id = user_id);
end;
$$ language plpgsql security definer; 