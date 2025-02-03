# Firestore Schema Documentation

## Collections Overview

### 1. `customers` Collection

The customers collection stores customer's information. Each document represents a customer.

#### Fields:
- **`name`** (String): The full name of the customer. 
- **`email`** (String): The email address of the customer. 
- **`address`** (String): The physical address of the customer. 
- **`role`** (String): The role of the user, defaults to Customer.

#### Example Documents

```json
{
  "name": "ABC Hotel", 
  "email": "abchotel@gmail.com",
  "address": "123 Robson Street, Vancouver, BC",
  "role": "Customer"
}
```

### 2. `drivers` Collection

### Fields:
- **`name`** (String): Driver's name 
- **`email`** (String): Driver's email address
- **`assignedRoutes`** (Array of References): An array of references to the `routes` collection.
- **`visitedLocations`** (Array of Strings): An array of location IDs that the driver has visited.

### Example JSON Document
```json
{
  "name": "Jimmy Choo",
  "email": "jimmychoo@example.com",
  "assignedRoutes": [
    "/routes/routeId1",
    "/routes/routeId2"
  ],
  "visitedLocations": [
    "locationId1",
    "locationId2",
    "locationId3"
  ]
}
