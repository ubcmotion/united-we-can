

# Firestore Schema Documentation

## Collections Overview

### 1. `pickupRequests` Collection

The pickupRequests collection stores pickup requests from customers. Each document represents a pickup request.

#### Fields:
- **`customerId`** (Reference to customers): A reference to the customer who created the request.
- **`createdAt`** (Timestamp): The timestamp of when the request was created.
- **`status`** (String): The status of the pickup request. It can be one of the following values:
  - `"Pending"`
  - `"Completed"`
- **`notes`** (String, optional): Additional notes about the pickup request.

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
}
