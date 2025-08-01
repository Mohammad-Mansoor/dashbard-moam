# 🚚 Mini Logistics Dashboard – MOAM Practical Challenge

This is a role-based logistics coordination dashboard built as part of the MOAM Frontend Practical Test. It simulates a real-world logistics platform for **Drivers** and **Shippers**, enabling role-specific views and actions such as trip tracking, status updates, and proof of delivery uploads.

## 🔧 Technologies Used

- **React** (Vite)
- **Tailwind CSS** for styling
- **React Router** for routing
- **react-icons** for icons
- **Mock Data** for backend simulation (JSON-based)

---

## ✨ Features

### ✅ 1. Role Switcher
- Toggle between **Driver**, **Admin** and **Shipper** roles from the dashboard header.
- All behavior dynamically changes based on the selected role.

### 🚚 2. Trip List (Mocked)
- 3–5 sample trips with the following fields:
  - Origin
  - Destination
  - Cargo Type
  - Status (`Assigned`, `In Transit`, `Delivered`)
  - Driver Name

### 👤 3. Driver View
- Sees **only assigned trips**
- Can update trip status from **Assigned → Delivered** → In Transit**
- Uploads a mock **proof of delivery (POD)** image

### 🧍 4. Shipper View
- Sees **all trips**
- Can track trip progress and status in real time
- Can **view proof of delivery image**

### 🧍 4. Admin View
- Sees **all trips**
- can **Search** and filter by Trip **Status**
- Can **Delete a Trip**
- Can track trip progress and status in real time
- Can **view proof of delivery image**

---

## 🤖 AI Tool Usage

I leveraged **ChatGPT 4-o** to:
- Write utility functions
- Create reusable modal
- Generate this README outline and improve clarity

I ensured all suggestions were fully understood, modified when needed, and tested thoroughly. I avoided copying any code blindly and used AI purely to enhance productivity and explore alternate approaches.

---

## 🧠 Design Thinking

- The **Role Switcher** is placed prominently in the header, simulating how user identity might dynamically change in real life.
- Trips are **visually grouped by status** for clarity.
- Driver actions are limited and intuitive to reduce operational error.
- UI is mobile-friendly and scales well to tablets and desktops.
- POD upload and display simulate actual workflow.

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone git@github.com:Mohammad-Mansoor/dashbard-moam.git
cd dashbard-moam
```
2. 📦 Installing Dependencies
```bash
npm install
```

4. 🔧 Running the Project
```bash
npm run dev
