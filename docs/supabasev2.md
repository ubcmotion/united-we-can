# Database Schema for Supabase (PostgreSQL)

## users

Represents all authenticated users (admins, customers, drivers).

| Column     | Type      | Notes                               |
| ---------- | --------- | ----------------------------------- |
| id         | UUID      | Primary key (Supabase Auth UID)     |
| email      | text      |                                     |
| name       | text      |                                     |
| phone      | text      | Driver-specific optional            |
| role       | text      | Enum: 'admin', 'driver', 'customer' |
| created_at | timestamp |                                     |

Instead of separate tables, role encodes subtype.

---

## locations

Physical pickup locations.

| Column       | Type      | Notes       |
| ------------ | --------- | ----------- |
| id           | UUID      | Primary key |
| latitude     | numeric   |             |
| longitude    | numeric   |             |
| instructions | text      |             |
| created_at   | timestamp |             |

---

## pickups

Represents **customer intent** (recurring or one-time service).

| Column      | Type      | Notes           |
| ----------- | --------- | --------------- |
| id          | UUID      | Primary key     |
| location_id | UUID      | FK → locations  |
| notes       | text      |                 |
| priority    | integer   |                 |
| volume      | integer   | Expected volume |
| status      | text      | active / paused |
| created_at  | timestamp |                 |

---

## recurring_schedules

Defines recurrence rules for pickups.

| Column     | Type    | Notes              |
| ---------- | ------- | ------------------ |
| id         | UUID    | Primary key        |
| pickup_id  | UUID    | FK → pickups       |
| rule       | text    | RRULE / cron-style |
| start_date | date    |                    |
| end_date   | date    | Optional           |
| is_active  | boolean |                    |

---

## pickup_requests

Represents **scheduled instances** generated from a pickup.

| Column     | Type      | Notes                  |
| ---------- | --------- | ---------------------- |
| id         | UUID      | Primary key            |
| pickup_id  | UUID      | FK → pickups           |
| date       | date      | Scheduled service date |
| created_at | timestamp |                        |

---

## routes

Represents a driver’s work session (daily route).

| Column       | Type      | Notes       |
| ------------ | --------- | ----------- |
| id           | UUID      | Primary key |
| driver_id    | UUID      | FK → users  |
| assigned_at  | timestamp |             |
| service_date | date      | Route day   |
| created_at   | timestamp |             |

---

## route_stops

---

| Column            | Type      | Notes                         |
| ----------------- | --------- | ----------------------------- |
| id                | UUID      | Primary key                   |
| route_id          | UUID      | FK → routes                   |
| pickup_request_id | UUID      | FK → pickup_requests          |
| stop_order        | integer   | Order within route            |
| assigned_at       | timestamp |                               |
| time_completed    | timestamp |                               |
| volume_collected  | integer   |                               |
| notes             | text      |                               |
| status            | text      | pending / completed / skipped |

---

# Relationship Summary

| Relationship               | Type         | Implementation            |
| -------------------------- | ------------ | ------------------------- |
| User → Route               | 1-to-many    | FK in routes              |
| Location → Pickup          | 1-to-many    | FK in pickups             |
| Pickup → PickupRequest     | 1-to-many    | FK in pickup_requests     |
| Pickup → RecurringSchedule | 1-to-many    | FK in recurring_schedules |
| Route ↔ PickupRequest      | many-to-many | route_stops table         |

---

# Conceptual Flow

## Customer intent

```
User(customer)
    ↓
Location
    ↓
Pickup
```

---

## Scheduling

```
Pickup
    ↓ generates
PickupRequest (dated instance)
```

---

## Execution

```
Driver
   ↓
Route
   ↓
RouteStop
   ↓
PickupRequest
```

