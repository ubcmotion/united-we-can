# Admin Role Management

## Overview
The web application only allows customers to sign up. Admin and driver roles must be assigned manually through the Supabase dashboard for security.

## How to Assign Roles

### 1. Access Supabase Dashboard
- Go to your Supabase project dashboard
- Navigate to **Table Editor** → **user_profiles**

### 2. Assign Admin Role
1. Find the user you want to make an admin
2. Click **Edit** on their row
3. Change the `role` field from `customer` to `admin`
4. Click **Save**

### 3. Assign Driver Role
1. Find the user you want to make a driver
2. Click **Edit** on their row
3. Change the `role` field from `customer` to `driver`
4. Click **Save**

## Role Permissions

### Customer
- Can access customer dashboard
- Can view their own profile
- Can update their own profile

### Driver
- Will use mobile app (not web app)
- Can view assigned pickup routes
- Can update pickup status

### Admin
- Can access all features
- Can view all user profiles
- Can access analytics dashboard
- Can manage the entire system

## Security Notes
- Only admins can view all user profiles
- Role changes are logged in the database
- Consider implementing audit trails for role changes in production 
