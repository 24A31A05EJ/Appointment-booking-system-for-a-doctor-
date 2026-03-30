# 🏥 MediCare Backend API

Backend API for the Doctor Appointment Booking System built with Node.js, Express, and SQLite.

## 🚀 Quick Start

### 1. **Install Dependencies**

Open PowerShell in the `backend` folder and run:

```powershell
npm install
```

### 2. **Start the Server**

```powershell
npm start
```

You should see:
```
🚀 Server running on http://localhost:5000
📡 API Base URL: http://localhost:5000/api
```

### 3. **Database**

- SQLite database will be created automatically at `backend/medicare.db`
- Sample doctors will be populated automatically on first run
- User data will be stored securely

---

## 📡 API Endpoints

### Authentication

**Sign Up** - Create new user account
```
POST /api/auth/signup
Body: {
  "name": "John Doe",
  "email": "john@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```

**Login** - User login
```
POST /api/auth/login
Body: {
  "email": "john@example.com",
  "password": "password123",
  "userType": "patient"
}
```

### Doctors

**Get All Doctors**
```
GET /api/doctors
```

**Get Doctor by ID**
```
GET /api/doctors/:id
```

### Appointments

**Book Appointment**
```
POST /api/appointments
Body: {
  "userId": 1,
  "doctorId": 1,
  "date": "2026-03-25",
  "time": "10:00 AM",
  "reason": "Regular checkup"
}
```

**Get User's Appointments**
```
GET /api/appointments/user/:userId
```

**Get All Appointments** (Admin)
```
GET /api/appointments
```

**Cancel Appointment**
```
DELETE /api/appointments/:id
```

**Reschedule Appointment**
```
PUT /api/appointments/:id
Body: {
  "date": "2026-03-26",
  "time": "02:00 PM"
}
```

**Health Check**
```
GET /api/health
```

---

## 🔍 How to Test

### Option 1: Using Postman (Recommended)
1. Download [Postman](https://www.postman.com/downloads/)
2. Create a new collection
3. Add requests for each endpoint
4. Test API responses

### Option 2: Using VS Code REST Client Extension
1. Install "REST Client" extension in VS Code
2. Create a file `test.http` in the backend folder
3. Add requests and run them

### Option 3: Using Command Line (curl)
```powershell
# Test health check
curl http://localhost:5000/api/health

# Get all doctors
curl http://localhost:5000/api/doctors
```

---

## 🗄️ Database Schema

### Users Table
- `id` (Integer, Primary Key)
- `name` (Text)
- `email` (Text, Unique)
- `password` (Text, Hashed)
- `userType` (Text: 'patient' or 'admin')
- `createdAt` (DateTime)

### Doctors Table
- `id` (Integer, Primary Key)
- `name` (Text)
- `specialty` (Text)
- `avatar` (Text)
- `availableDates` (JSON)
- `availableTimes` (JSON)
- `createdAt` (DateTime)

### Appointments Table
- `id` (Integer, Primary Key)
- `userId` (Foreign Key → users.id)
- `doctorId` (Foreign Key → doctors.id)
- `date` (Text)
- `time` (Text)
- `reason` (Text)
- `status` (Text: 'confirmed', 'cancelled')
- `createdAt` (DateTime)

---

## 📝 Testing Steps

### 1. Sign Up a New User
POST to `http://localhost:5000/api/auth/signup` with:
```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "password": "password123",
  "confirmPassword": "password123"
}
```
Expected Response:
```json
{
  "success": true,
  "message": "User registered successfully",
  "userId": 1
}
```

### 2. Login User
POST to `http://localhost:5000/api/auth/login` with:
```json
{
  "email": "jane@example.com",
  "password": "password123",
  "userType": "patient"
}
```

### 3. Get All Doctors
GET to `http://localhost:5000/api/doctors`

### 4. Book an Appointment
POST to `http://localhost:5000/api/appointments` with:
```json
{
  "userId": 1,
  "doctorId": 1,
  "date": "2026-03-25",
  "time": "10:00 AM",
  "reason": "General checkup"
}
```

### 5. View Appointments for User
GET to `http://localhost:5000/api/appointments/user/1`

---

## 🛑 Troubleshooting

**Error: "npm: The term 'npm' is not recognized"**
- Install Node.js from https://nodejs.org/
- Restart PowerShell

**Error: "Port 5000 already in use"**
- Change PORT in server.js or kill process using port 5000
- In PowerShell: `Get-Process | Where-Object {$_.Handles -eq 'node'} | Stop-Process`

**Database not found**
- Delete `medicare.db` and restart server
- Database will be recreated automatically

---

## 🔗 Frontend Integration

Update your frontend `script.js` to use APIs instead of localStorage. See the next file for details.
