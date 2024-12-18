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
