# 🏥 Doctor Appointment Booking Website - MediCare

A modern, fully responsive Doctor Appointment Booking Website built with **HTML, CSS, and JavaScript**. This application allows users to create accounts, log in, browse available doctors, and book appointments seamlessly. Includes admin functionality for managing doctors and appointments.

## ✨ Features

### 1. **Home Page**
- Eye-catching hero section with call-to-action button
- Navigation bar with links to login and sign-up
- "Why Choose MediCare" features section
- Modern, responsive design
- Contact information section
- Professional footer

### 2. **Sign Up Page**
- User registration form with the following fields:
  - Full Name
  - Email Address
  - Password (minimum 6 characters)
  - Confirm Password
- **Form Validation:**
  - Name validation (required)
  - Email format validation
  - Password strength check (minimum 6 characters)
  - Password match validation
  - Duplicate email check
- Data stored securely in browser's localStorage
- Error messages displayed for invalid inputs
- Redirect to login page after successful registration

### 3. **Login Page**
- User authentication form with:
  - Email Address
  - Password
  - User Type selection (Patient/Admin)
- **Login Validation:**
  - Email and password verification against stored user data
  - Admin login with predefined credentials
  - Real-time error messages for incorrect credentials
  - Session management with localStorage
- Redirect to dashboard (patients) or admin panel (admins) upon successful login
- Link to sign-up for new users

### 4. **Patient Dashboard**
- **Accessibility:** Only accessible when logged in as patient
- **Appointment Management:**
  - View upcoming appointments
  - View appointment history
  - Cancel appointments
  - Reschedule appointments
- **User Profile:** Display user information and stats
- Quick access to book new appointments

### 5. **Doctors Page**
- **Accessibility:** Only accessible when logged in as patient
- **Doctor Display:**
  - Dynamic rendering of doctor cards
  - Each doctor card includes:
    - Doctor's avatar (emoji)
    - Doctor's name
    - Medical specialization
    - Available appointment dates
    - Available time slots
    - "Book Appointment" button
- **Search Functionality:**
  - Real-time filter by doctor name or specialization
  - "No results" message when search yields no matches
- **Appointment Booking Modal:**
  - Select appointment date from available dates
  - Select appointment time from available slots
  - Add notes about reason for visit
  - Confirmation dialog with booking details
  - Appointments stored in localStorage
- **Navigation:**
  - User greeting display
  - Logout button to clear session

### 6. **Admin Dashboard**
- **Accessibility:** Only accessible when logged in as admin
- **Admin Login Credentials:**
  - Email: `admin@medicare.com`
  - Password: `admin123`
- **Dashboard Overview:**
  - System statistics (total doctors, appointments, today's appointments)
  - Recent appointments list
  - Doctor availability overview
- **Appointment Management:**
  - View all appointments across the system
  - Cancel appointments on behalf of patients
  - Monitor appointment status and details
- **Doctor Management:**
  - View all doctors in the system
  - Add new doctors with custom availability
  - Delete doctors (with appointment cancellation)
  - Edit doctor information (planned feature)
- **Add Doctor Functionality:**
  - Doctor name, specialty, and avatar selection
  - Date range selection for availability
  - Time slot selection (multiple)
  - Automatic date generation between selected ranges

### 7. **Design & UI/UX**
- **Modern Design:**
  - Clean, professional color scheme (Green & Blue)
  - Gradient backgrounds for visual appeal
  - CSS Flexbox and Grid layouts
- **Responsive Layout:**
  - Mobile-first approach
  - Breakpoints for tablets (768px) and mobile (480px)
  - Fully functional on all device sizes
- **Interactive Elements:**
  - Hover effects on buttons and cards
  - Smooth transitions and animations
  - Smooth scrolling
  - Loading animations for cards
- **Professional UI Components:**
  - Custom form inputs with focus states
  - Modal dialogs for booking
  - Alert messages for user feedback
  - Navigation bar with active link indicators

## 📁 Project Structure

```
fsd/
├── index.html          # Home page
├── signup.html         # Sign up page
├── login.html          # Login page
├── doctors.html        # Doctors listing and booking page
├── dashboard.html      # Patient dashboard
├── admin.html          # Admin dashboard
├── styles.css          # Main stylesheet (all pages)
├── script.js           # JavaScript functionality (all pages)
└── README.md           # Project documentation
```

## 🚀 Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- No additional dependencies or installations required

### Installation & Usage

1. **Download or Clone the Project**
   - Save all files in a single folder

2. **Open the Website**
   - Simply open `index.html` in your web browser
   - Or use a local server (recommended):
     ```bash
     # Using Python 3
     python -m http.server 8000
     
     # Using Python 2
     python -m SimpleHTTPServer 8000
     
     # Using Node.js (with http-server package)
     npx http-server
     ```
   - Then navigate to `http://localhost:8000`

3. **Test the Application**

   **Sign Up:**
   - Click "Sign Up" button on home page or login page
   - Fill in the registration form with valid information
   - Password must be at least 6 characters
   - Passwords must match
   - Click "Sign Up" button

   **Login:**
   - Click "Login" button on home page or signup page
   - Use your registered email and password
   - Click "Login" button

   **Browse Doctors & Book Appointment:**
   - After successful login, you'll be redirected to the doctors page
   - Search for doctors by name or specialization using the search bar
   - Click "Book Appointment" on any doctor card
   - Select date and time from the available options
   - Add optional notes about your reason for visit
   - Click "Confirm Booking" to complete the appointment

   **Logout:**
   - Click the "Logout" button in the navigation bar
   - Your session will be cleared and you'll return to home page

## 💾 Data Storage

The application uses **localStorage** for data persistence:

- **Users Data:** Stored as array of user objects
  - `localStorage.getItem('users')` - Returns JSON array of registered users
- **Login Session:** 
  - `localStorage.getItem('isLoggedIn')` - Returns 'true' if user is logged in
  - `localStorage.getItem('currentUser')` - Returns JSON of current logged-in user
- **Appointments:** Stored as array of appointment objects
  - `localStorage.getItem('appointments')` - Returns JSON array of all bookings

### Sample localStorage Keys:
```javascript
// Users
users = [
  { id: timestamp, name: "John Doe", email: "john@example.com", password: "123456" },
  ...
]

// Current Session
isLoggedIn = "true"
currentUser = { id: timestamp, name: "John Doe", email: "john@example.com" }

// Appointments
appointments = [
  { 
    id: timestamp, 
    doctorName: "Dr. Sarah Johnson",
    doctorSpecialty: "Cardiologist",
    appointmentDate: "2026-02-20",
    appointmentTime: "09:00 AM",
    reason: "Regular checkup",
    bookedBy: "john@example.com",
    bookingDate: "2026-02-18T10:30:00.000Z"
  },
  ...
]
```

## 👨‍⚕️ Pre-loaded Doctors

The application comes with 6 sample doctors:

1. **Dr. Sarah Johnson** - Cardiologist
2. **Dr. Michael Chen** - Dermatologist
3. **Dr. Emily Williams** - Neurologist
4. **Dr. James Brown** - Orthopedic Surgeon
5. **Dr. Lisa Anderson** - Pediatrician
6. **Dr. Robert Taylor** - General Practitioner

Each doctor has:
- 4-6 available appointment dates
- 3-6 available time slots per date

## 🎨 Color Scheme

- **Primary Green:** `#4CAF50` - Main actions and highlights
- **Secondary Blue:** `#2196F3` - Secondary buttons
- **Danger Red:** `#f44336` - Error messages
- **Light Gray:** `#f5f5f5` - Background
- **Dark Gray:** `#333333` - Text

## 🔒 Security Notes

⚠️ **Important:** This is a frontend demonstration project. For production use:
- Never store passwords in plain text (implement proper hashing like bcrypt)
- Use backend server for authentication
- Implement secure session management
- Use HTTPS for all communications
- Implement proper data validation on server side
- Add CSRF protection
- Implement rate limiting for login attempts

## 📱 Responsive Breakpoints

- **Desktop:** Full layout with all features
- **Tablet (≤768px):** Adjusted layouts for medium screens
- **Mobile (≤480px):** Optimized single-column layout

## 🔧 Browser Compatibility

- Chrome (v90+)
- Firefox (v88+)
- Safari (v14+)
- Edge (v90+)
- Opera (v76+)

## 📝 Code Comments

All code throughout the project is thoroughly commented with:
- Section headers for easy navigation
- Function descriptions
- Logic explanations
- Inline comments for complex operations

## 🎯 Future Enhancements

Potential features for expansion:
- Backend API integration
- Email notifications for appointments
- Appointment history and management
- Doctor ratings and reviews
- Appointment cancellation/rescheduling
- Payment integration
- SMS reminders
- Medication recommendations
- Patient medical history
- Multi-language support

## 🤝 Contributing

Feel free to modify and extend this project. Some enhancement ideas:
- Add more doctor specializations
- Implement appointment rescheduling
- Add patient feedback system
- Create admin panel for doctor management
- Add appointment reminders

## 📄 License

This project is open source and available for educational and personal use.

## 👨‍💻 Author

Created as a demonstration of modern web development practices using vanilla HTML, CSS, and JavaScript.

## 📞 Support

For issues or questions about the project:
1. Check the code comments for detailed explanations
2. Review the data structure in localStorage
3. Test in browser developer console for debugging

---

**Current Date:** February 18, 2026
**MediCare - Your Health is Our Priority** 🏥
