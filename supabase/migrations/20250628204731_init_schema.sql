-- locations
create table locations (
  id uuid primary key default gen_random_uuid(),
  customer_id uuid references auth.users(id),
  address text not null,
  latitude numeric,
  longitude numeric,
  instructions text,
  created_at timestamp default now()
);

-- location_groups
create table location_groups (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  description text
);

-- pickup_location_group_membership
create table pickup_location_group_membership (
  id uuid primary key default gen_random_uuid(),
  location_id uuid references locations(id) on delete cascade,
  group_id uuid references location_groups(id) on delete cascade
);

-- driver_group_assignments
create table driver_group_assignments (
  id uuid primary key default gen_random_uuid(),
  driver_id uuid references auth.users(id) on delete cascade,
  group_id uuid references location_groups(id) on delete cascade
);

-- pickup_requests
create table pickup_requests (
  id uuid primary key default gen_random_uuid(),
  location_id uuid references locations(id) on delete cascade,
  customer_id uuid references auth.users(id) on delete cascade,
  requested_date date not null,
  status text check (status in ('pending', 'approved', 'rejected')) default 'pending',
  notes text,
  created_at timestamp default now()
);

-- pickups
create table pickups (
  id uuid primary key default gen_random_uuid(),
  location_id uuid references locations(id) on delete cascade,
  driver_id uuid references auth.users(id) on delete cascade,
  date_completed timestamp,
  volume integer,
  notes text,
  request_id uuid references pickup_requests(id) on delete set null
);

-- Enable RLS on all tables
alter table locations enable row level security;
alter table location_groups enable row level security;
alter table pickup_location_group_membership enable row level security;
alter table driver_group_assignments enable row level security;
alter table pickup_requests enable row level security;
alter table pickups enable row level security;
