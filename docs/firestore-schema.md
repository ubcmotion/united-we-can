
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

### 2. `pickupRequests` Collection

The pickupRequests collection stores pickup requests from customers. Each document represents a pickup request.

#### Fields:
- **`customerId`** (Reference to customers): A reference to the customer who created the request.
- **`createdAt`** (Timestamp): The timestamp of when the request was created.
- **`status`** (String): The status of the pickup request. It can be one of the following values:
  - `"Pending"`
  - `"Completed"`
- **`notes`** (String, optional): Additional notes about the pickup request.


### 3. `customers` Collection

The customers collection stores customer's information. Each document represents a customer.

#### Fields:
- **`name`** (String): The full name of the customer. 
- **`email`** (String): The email address of the customer. 
- **`address`** (String): The physical address of the customer. 
- **`role`** (String): The role of the user, defaults to Customer.
>>>>>>> 977e49d (chore: add documentation for the customers collection)

#### Example Documents

```json
{
  "customerId": "/customers/abc123",  // Reference to the customer document
  "createdAt": "2024-12-15T10:00:00Z",  // Timestamp of when the request was created
  "status": "Pending",
  "notes": "Please pick up the items in front of my house."
},

{
  "customerId": "/customers/abc123",  // Reference to the customer document
  "createdAt": "2024-12-10T10:00:00Z",  // Timestamp of when the request was created
  "status": "Completed",
  "notes":

  "name": "ABC Hotel", 
  "email": "abchotel@gmail.com",
  "address": "123 Robson Street, Vancouver, BC",
  "role": "Customer"
}
