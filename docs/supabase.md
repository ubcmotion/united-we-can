## Database Schema for Supabase (PostgreSQL)

This schema supports a multi-portal recycling pickup system using Supabase Auth for authentication. The database is designed to support drivers, customers, and admins, with custom grouping, recurring and one-time pickups, and flexible scheduling.

---

## Tables

### users

Stores authenticated user data via Supabase Auth.

| Column      | Type      | Notes                                   |
| ----------- | --------- | --------------------------------------- |
| id          | UUID      | Primary key (matches Supabase Auth UID) |
| role        | text      | Enum: 'admin', 'driver', 'customer'     |
| full\_name  | text      | Optional                                |
| email       | text      | Optional                                |
| phone       | text      | Optional                                |
| created\_at | timestamp |                                         |

* Supabase Auth will manage authentication; this table stores extended metadata per user.

---

### locations

Stores physical pickup locations. Linked to a customer.

| Column       | Type      | Notes                     |
| ------------ | --------- | ------------------------- |
| id           | UUID      | Primary key               |
| customer\_id | UUID      | Foreign key to users      |
| address      | text      |                           |
| latitude     | numeric   | For map rendering         |
| longitude    | numeric   | For map rendering         |
| instructions | text      | Optional notes for pickup |
| created\_at  | timestamp |                           |

---

### location\_groups

Supports grouping locations by day of the week or by custom categories.

| Column      | Type | Notes                            |
| ----------- | ---- | -------------------------------- |
| id          | UUID | Primary key                      |
| name        | text | e.g. "Monday", "Bars in Gastown" |
| description | text | Optional                         |

---

### pickup\_location\_group\_membership

Join table between locations and location groups (many-to-many).

| Column       | Type | Notes                           |
| ------------ | ---- | ------------------------------- |
| id           | UUID | Primary key                     |
| location\_id | UUID | Foreign key to locations        |
| group\_id    | UUID | Foreign key to location\_groups |

---

### driver\_group\_assignments

Assigns drivers to specific location groups (e.g. Monday pickups).

| Column     | Type | Notes                       |
| ---------- | ---- | --------------------------- |
| id         | UUID | Primary key                 |
| driver\_id | UUID | FK to users (role = driver) |
| group\_id  | UUID | FK to location\_groups      |

---

### pickup\_requests

Created by customers. Represents intent to request a pickup.

| Column          | Type      | Notes                       |
| --------------- | --------- | --------------------------- |
| id              | UUID      | Primary key                 |
| location\_id    | UUID      | Foreign key to locations    |
| customer\_id    | UUID      | Foreign key to users        |
| requested\_date | date      | Desired pickup date         |
| status          | text      | pending, approved, rejected |
| notes           | text      | Optional                    |
| created\_at     | timestamp |                             |

---

### pickups

Actual pickups performed by a driver.

| Column          | Type      | Notes                           |
| --------------- | --------- | ------------------------------- |
| id              | UUID      | Primary key                     |
| location\_id    | UUID      | Foreign key to locations        |
| driver\_id      | UUID      | Foreign key to users            |
| date\_completed | timestamp | When the pickup was done        |
| volume          | integer   | Number of totes picked up       |
| notes           | text      | Optional                        |
| request\_id     | UUID      | Optional FK to pickup\_requests |

---

## Why It's Structured This Way

* **Supabase Auth + users**: All users are authenticated. Their role (`driver`, `customer`, `admin`) is used in row-level security (RLS) policies.
* **locations**: Keeps track of physical locations tied to customers. Coordinates (latitude/longitude) are included to support maps.
* **location\_groups**: Needed for flexible grouping by day or custom tags (e.g. "Bars in Gastown").
* **pickup\_location\_group\_membership**: Supports many-to-many relationship so one location can belong to multiple groups.
* **driver\_group\_assignments**: Allows assigning drivers to groups (e.g., "Monday").
* **pickup\_requests vs pickups**: Separates intent (requests by customers) from action (fulfilled by drivers). Each pickup can optionally reference the request it fulfills.
* **volume**: Reflects the number of totes picked up (no need for material type).
* **Role support**:

  * Customers: Can submit requests for their own locations.
  * Drivers: Assigned to groups (e.g. "Monday") but can frontload pickups.
  * Admins: Can view all data, assign drivers, and generate reports.
