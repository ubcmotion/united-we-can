# Firestore Schema Documentation

## Collections Overview

### 1. `drivers` Collection

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
