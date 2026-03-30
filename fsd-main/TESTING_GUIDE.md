# 📋 MediCare - Quick Start Guide & Testing Examples

## 🚀 Quick Start in 2 Minutes

### Step 1: Open the Website
- Double-click `index.html` or open it in your browser
- Or use a local server:
  ```bash
  # Windows Command Prompt
  cd path\to\fsd
  python -m http.server 8000
  
  # Then go to http://localhost:8000
  ```

### Step 2: Create an Account
- Click "Sign Up" button
- Use these example credentials:
  ```
  Name: John Doe
  Email: john@example.com
  Password: password123
  Confirm Password: password123
  ```
- Click "Sign Up"

### Step 3: Login
- You'll be redirected to login page
- Enter the credentials you just created
- Click "Login"

### Step 4: Browse & Book
- Browse available doctors
- Search for "Cardiologist" to filter doctors
- Click "Book Appointment" on any doctor
- Select date and time
- Click "Confirm Booking"

---

## 🧪 Test Scenarios

### Scenario 1: Sign Up Validation

**Test Invalid Name:**
- Leave name field empty → Should show error "Please enter your full name"

**Test Invalid Email:**
- Enter "invalidemail" → Should show error "Please enter a valid email"

**Test Weak Password:**
- Enter "123" → Should show error "Password must be at least 6 characters"

**Test Password Mismatch:**
- Password: "password123"
- Confirm: "password456" → Should show error "Passwords do not match"

**Test Duplicate Email:**
- Try signing up with an existing email → Should show "Email already registered"

---

### Scenario 2: Login Features

**Successful Login:**
1. Sign up with: john@example.com / password123
2. Login with same credentials
3. Should redirect to doctors page with greeting "Welcome, John Doe!"

**Failed Login - Wrong Password:**
1. Try email: john@example.com
2. Password: wrongPassword
3. Should show error "Invalid email or password. Please try again."

**Failed Login - Unregistered Email:**
1. Try email: notregistered@example.com
2. Any password
3. Should show error "Invalid email or password. Please try again."

---

### Scenario 3: Doctor Browsing & Search

**Search by Doctor Name:**
- Type "Sarah" in search → Shows only Dr. Sarah Johnson
- Type "Chen" → Shows only Dr. Michael Chen
- Clear search → Shows all doctors

**Search by Specialization:**
- Type "Cardiologist" → Shows Dr. Sarah Johnson
- Type "Dermatologist" → Shows Dr. Michael Chen
- Type "Pediatrician" → Shows Dr. Lisa Anderson

**No Results Search:**
- Type "xyz123" → Shows "No doctors found matching your search."

---

### Scenario 4: Booking Appointment

**Complete Booking:**
1. Click "Book Appointment" on any doctor
2. Modal opens with doctor info
3. Select a date from dropdown
4. Select a time from dropdown
5. Add optional reason
6. Click "Confirm Booking"
7. Should show success message with appointment details
8. Modal closes

**Incomplete Booking:**
- Click "Book Appointment"
- Try clicking "Confirm Booking" without selecting date/time
- Should show error "Please select both date and time for your appointment."

**Multiple Bookings:**
- Book multiple appointments with different doctors
- Book multiple appointments with same doctor at different times
- All should be saved successfully

---

### Scenario 5: Authentication & Session

**Protect Doctors Page:**
1. Delete `localStorage` items (In DevTools → Application → localStorage)
2. Try accessing doctors.html directly
3. Should show alert and redirect to login

**Stay Logged In:**
1. Login successfully
2. Refresh the page
3. Should stay on doctors page (session preserved)

**Logout Functionality:**
1. Click "Logout" button
2. Should show success message
3. Redirect to home page
4. Accessing doctors.html should now require login

---

## 📊 Sample Test Data

### Test User Accounts

```
Email: test@example.com
Password: Test@123

Email: doctor@example.com  
Password: Doctor123

Email: patient@example.com
Password: Patient123
```

### Available Appointment Slots

**Sample Doctor:** Dr. Sarah Johnson (Cardiologist)
- **Dates:** Feb 20, 21, 22, 23, 2026
- **Times:** 09:00 AM, 10:00 AM, 02:00 PM, 04:00 PM

**Sample Doctor:** Dr. Michael Chen (Dermatologist)
- **Dates:** Feb 20, 22, 23, 24, 2026
- **Times:** 10:00 AM, 11:00 AM, 03:00 PM, 05:00 PM

---

## 🔍 Browser Developer Tools Testing

### Check localStorage
```javascript
// Open browser console and run:

// View all users
JSON.parse(localStorage.getItem('users'))

// View current user
JSON.parse(localStorage.getItem('currentUser'))

// View login status
localStorage.getItem('isLoggedIn')

// View all appointments
JSON.parse(localStorage.getItem('appointments'))

// Clear all data (reset app)
localStorage.clear()
```

### Simulate User Actions
```javascript
// Simulate login
localStorage.setItem('isLoggedIn', 'true')
localStorage.setItem('currentUser', JSON.stringify({
  id: 123,
  name: 'Test User',
  email: 'test@example.com'
}))

// Simulate logout
localStorage.clear()
```

---

## ✅ Cross-Browser Testing Checklist

Test on these browsers:
- [ ] Chrome/Chromium
- [ ] Firefox
- [ ] Safari
- [ ] Edge
- [ ] Mozilla Firefox

Test these features on each browser:
- [ ] Form validation
- [ ] Modal functionality
- [ ] Search/filter
- [ ] localStorage operations
- [ ] Responsive layout
- [ ] Navigation

---

## 📱 Responsive Testing

### Test on Different Screen Sizes

**Desktop (1200px+)**
- [ ] All features visible
- [ ] Grid displays 3+ columns
- [ ] Navigation bar fully expanded

**Tablet (768px - 1199px)**
- [ ] Adjusted grid layout
- [ ] Touch-friendly buttons
- [ ] Readable text sizes
- [ ] Responsive containers

**Mobile (480px - 767px)**
- [ ] Single column layout
- [ ] Hamburger menu simulation
- [ ] Large touch targets
- [ ] Optimized forms

**Small Mobile (<480px)**
- [ ] All content accessible
- [ ] Text readable
- [ ] No horizontal scrolling
- [ ] Buttons clickable

---

## 🐛 Debugging Tips

### Issue: Can't Login
**Solution:** 
1. Check console for errors: F12 → Console tab
2. Verify user was registered: `JSON.parse(localStorage.getItem('users'))`
3. Clear cache and try again

### Issue: Missing Doctors
**Solution:**
1. Check if script.js loaded: Look for errors in console
2. Verify on doctors page you're logged in
3. Check browser console for JavaScript errors

### Issue: Appointment Not Saving
**Solution:**
1. Open DevTools → Application → localStorage
2. Check if 'appointments' key exists
3. Verify all form fields are filled
4. Check browser console for errors

### Issue: Search Not Working
**Solution:**
1. Type slowly to ensure input is registered
2. Check browser console for JavaScript errors
3. Verify doctors data loaded
4. Try typing with lowercase letters

---

## 🎬 Video Walkthrough Steps

1. **Home Page Tour** (30 seconds)
   - Show hero section
   - Scroll to features
   - Show contact section

2. **Sign Up Journey** (45 seconds)
   - Click sign up
   - Fill form with valid data
   - Show validation errors (empty field, weak password, mismatch)
   - Successfully sign up

3. **Login & Browse** (1 minute)
   - Login with credentials
   - Welcome message appears
   - Browse doctors
   - Use search feature

4. **Book Appointment** (1 minute)
   - Click book button
   - Modal opens
   - Select date and time
   - Add reason
   - Confirm booking
   - Show success message

5. **Logout** (15 seconds)
   - Click logout
   - Return to home page
   - Try accessing doctors page
   - Show redirect to login

---

## 📞 Troubleshooting

| Problem | Solution |
|---------|----------|
| Page won't load | Ensure all files are in same folder |
| Styling looks broken | Clear browser cache (Ctrl+Shift+Delete) |
| Login says invalid | Check email/password spelling exactly |
| Search not working | Ensure you're on doctors page and logged in |
| Appointments not saving | Check localStorage is enabled in browser |
| Modal won't close | Click outside modal or refresh page |

---

## 💡 Pro Tips

1. **Use DevTools** - F12 to debug JavaScript and inspect elements
2. **Clear localStorage** - `localStorage.clear()` to reset app completely
3. **Test Edge Cases** - Try empty fields, special characters, very long inputs
4. **Check Console** - Many issues appear as errors in console tab
5. **Use Firefox DevTools** - Excellent for CSS debugging
6. **Test Mobile** - Use browser DevTools mobile emulation (Ctrl+Shift+M)

---

**Happy Testing! 🚀**

Good luck with MediCare! Feel free to modify and enhance the application.
