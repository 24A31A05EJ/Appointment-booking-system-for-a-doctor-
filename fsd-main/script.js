// ============================================
// SAMPLE DOCTORS DATA
// ============================================

const doctorsData = [
    // Cardiologists
    {
        id: 1,
        name: 'Dr. Siddendra Thakur',
        specialty: 'Cardiology',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-20', '2026-03-21', '2026-03-22', '2026-03-23', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-30', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-04', '2026-04-06', '2026-04-07', '2026-04-08'],
        availableTimes: ['09:00 AM', '10:00 AM', '02:00 PM', '04:00 PM']
    },
    {
        id: 2,
        name: 'Dr. Michael Chen',
        specialty: 'Cardiology',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-20', '2026-03-21', '2026-03-22', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-04', '2026-04-05', '2026-04-06', '2026-04-08', '2026-04-09'],
        availableTimes: ['08:00 AM', '11:00 AM', '01:00 PM', '03:30 PM']
    },
    {
        id: 3,
        name: 'Dr. Sarah Mitchell',
        specialty: 'Cardiology',
        avatar: '👩‍⚕️',
        availableDates: ['2026-03-20', '2026-03-22', '2026-03-23', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-30', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-05', '2026-04-06', '2026-04-07', '2026-04-08', '2026-04-09'],
        availableTimes: ['10:30 AM', '12:00 PM', '02:30 PM', '05:00 PM']
    },
    
    // Dermatologists
    {
        id: 4,
        name: 'Dr. Vinesh Patel',
        specialty: 'Dermatology',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-20', '2026-03-22', '2026-03-23', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-28', '2026-03-29', '2026-03-30', '2026-03-31', '2026-04-02', '2026-04-03', '2026-04-04', '2026-04-05', '2026-04-07', '2026-04-08', '2026-04-09'],
        availableTimes: ['10:00 AM', '11:00 AM', '03:00 PM', '05:00 PM']
    },
    {
        id: 5,
        name: 'Dr. Emily Rodriguez',
        specialty: 'Dermatology',
        avatar: '👩‍⚕️',
        availableDates: ['2026-03-20', '2026-03-21', '2026-03-23', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-30', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-04', '2026-04-05', '2026-04-06', '2026-04-07', '2026-04-08', '2026-04-09'],
        availableTimes: ['09:00 AM', '11:30 AM', '02:00 PM', '04:00 PM']
    },
    {
        id: 6,
        name: 'Dr. James Wilson',
        specialty: 'Dermatology',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-21', '2026-03-22', '2026-03-24', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-30', '2026-03-31', '2026-04-02', '2026-04-03', '2026-04-04', '2026-04-06', '2026-04-07', '2026-04-08', '2026-04-09'],
        availableTimes: ['08:30 AM', '10:00 AM', '01:00 PM', '03:30 PM']
    },
    
    // Neurologists
    {
        id: 7,
        name: 'Dr. Sai Hansitha Sharma',
        specialty: 'Neurology',
        avatar: '👩‍⚕️',
        availableDates: ['2026-03-21', '2026-03-22', '2026-03-23', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-29', '2026-03-30', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-05', '2026-04-06', '2026-04-07', '2026-04-08'],
        availableTimes: ['08:30 AM', '01:00 PM', '03:30 PM']
    },
    {
        id: 8,
        name: 'Dr. David Kumar',
        specialty: 'Neurology',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-20', '2026-03-21', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-30', '2026-03-31', '2026-04-01', '2026-04-03', '2026-04-04', '2026-04-05', '2026-04-06', '2026-04-08', '2026-04-09'],
        availableTimes: ['09:00 AM', '11:00 AM', '02:00 PM', '04:30 PM']
    },
    {
        id: 9,
        name: 'Dr. Jennifer Brooks',
        specialty: 'Neurology',
        avatar: '👩‍⚕️',
        availableDates: ['2026-03-20', '2026-03-22', '2026-03-23', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-30', '2026-04-01', '2026-04-02', '2026-04-04', '2026-04-05', '2026-04-07', '2026-04-08', '2026-04-09'],
        availableTimes: ['10:00 AM', '12:30 PM', '03:00 PM']
    },
    
    // Orthopedic Surgeons
    {
        id: 10,
        name: 'Dr. Sayantan Kar',
        specialty: 'Orthopedic Surgery',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-20', '2026-03-21', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-30', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-04', '2026-04-05', '2026-04-06', '2026-04-07', '2026-04-09'],
        availableTimes: ['09:30 AM', '11:30 AM', '02:30 PM', '04:30 PM']
    },
    {
        id: 11,
        name: 'Dr. Marcus Thompson',
        specialty: 'Orthopedic Surgery',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-20', '2026-03-22', '2026-03-23', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-05', '2026-04-06', '2026-04-08', '2026-04-09'],
        availableTimes: ['08:00 AM', '10:30 AM', '01:00 PM', '03:00 PM']
    },
    {
        id: 12,
        name: 'Dr. Anna Kovacs',
        specialty: 'Orthopedic Surgery',
        avatar: '👩‍⚕️',
        availableDates: ['2026-03-21', '2026-03-23', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-29', '2026-03-30', '2026-03-31', '2026-04-01', '2026-04-03', '2026-04-04', '2026-04-05', '2026-04-07', '2026-04-08', '2026-04-09'],
        availableTimes: ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM']
    },
    
    // Pediatricians
    {
        id: 13,
        name: 'Dr. Lisa Anderson',
        specialty: 'Pediatrics',
        avatar: '👩‍⚕️',
        availableDates: ['2026-03-21', '2026-03-23', '2026-03-24', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-30', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-04', '2026-04-06', '2026-04-07', '2026-04-08'],
        availableTimes: ['09:00 AM', '10:30 AM', '02:00 PM']
    },
    {
        id: 14,
        name: 'Dr. Christopher Lee',
        specialty: 'Pediatrics',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-20', '2026-03-21', '2026-03-22', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-30', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-04', '2026-04-05', '2026-04-06', '2026-04-08'],
        availableTimes: ['08:30 AM', '10:00 AM', '01:30 PM', '03:30 PM']
    },
    {
        id: 15,
        name: 'Dr. Rachel Green',
        specialty: 'Pediatrics',
        avatar: '👩‍⚕️',
        availableDates: ['2026-03-20', '2026-03-22', '2026-03-24', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-05', '2026-04-06', '2026-04-07', '2026-04-09'],
        availableTimes: ['09:00 AM', '11:00 AM', '02:30 PM']
    },
    
    // General Practitioners
    {
        id: 16,
        name: 'Dr. Robert Taylor',
        specialty: 'General Practice',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-20', '2026-03-21', '2026-03-22', '2026-03-23', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-30', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-04', '2026-04-05', '2026-04-06', '2026-04-07', '2026-04-08', '2026-04-09'],
        availableTimes: ['08:00 AM', '09:00 AM', '10:00 AM', '01:00 PM', '02:00 PM', '03:00 PM']
    },
    {
        id: 17,
        name: 'Dr. Patricia Johnson',
        specialty: 'General Practice',
        avatar: '👩‍⚕️',
        availableDates: ['2026-03-20', '2026-03-21', '2026-03-22', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-04', '2026-04-05', '2026-04-06', '2026-04-07', '2026-04-08', '2026-04-09'],
        availableTimes: ['08:30 AM', '09:30 AM', '11:00 AM', '01:00 PM', '02:30 PM', '04:00 PM']
    },
    {
        id: 18,
        name: 'Dr. William Garcia',
        specialty: 'General Practice',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-20', '2026-03-21', '2026-03-23', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-30', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-04', '2026-04-06', '2026-04-07', '2026-04-08', '2026-04-09'],
        availableTimes: ['08:00 AM', '10:00 AM', '12:00 PM', '02:00 PM', '04:00 PM']
    },
    
    // Ophthalmologists
    {
        id: 19,
        name: 'Dr. Kevin White',
        specialty: 'Ophthalmology',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-20', '2026-03-22', '2026-03-24', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-31', '2026-04-02', '2026-04-03', '2026-04-04', '2026-04-06', '2026-04-07', '2026-04-08', '2026-04-09'],
        availableTimes: ['09:00 AM', '10:00 AM', '02:00 PM', '04:00 PM']
    },
    {
        id: 20,
        name: 'Dr. Laura Martinez',
        specialty: 'Ophthalmology',
        avatar: '👩‍⚕️',
        availableDates: ['2026-03-20', '2026-03-21', '2026-03-23', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-30', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-04', '2026-04-05', '2026-04-07', '2026-04-08'],
        availableTimes: ['08:30 AM', '11:00 AM', '01:30 PM', '03:00 PM']
    },
    {
        id: 21,
        name: 'Dr. Andrew Brown',
        specialty: 'Ophthalmology',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-21', '2026-03-22', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-30', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-05', '2026-04-06', '2026-04-08', '2026-04-09'],
        availableTimes: ['09:30 AM', '11:30 AM', '02:00 PM', '04:30 PM']
    },
    
    // ENT Specialists
    {
        id: 22,
        name: 'Dr. Victor Patel',
        specialty: 'Ear, Nose & Throat',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-20', '2026-03-21', '2026-03-23', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-30', '2026-03-31', '2026-04-01', '2026-04-03', '2026-04-04', '2026-04-05', '2026-04-06', '2026-04-08'],
        availableTimes: ['08:00 AM', '10:00 AM', '01:00 PM', '03:00 PM']
    },
    {
        id: 23,
        name: 'Dr. Sandra Turner',
        specialty: 'Ear, Nose & Throat',
        avatar: '👩‍⚕️',
        availableDates: ['2026-03-20', '2026-03-22', '2026-03-24', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-31', '2026-04-01', '2026-04-02', '2026-04-03', '2026-04-04', '2026-04-06', '2026-04-07', '2026-04-09'],
        availableTimes: ['09:00 AM', '11:00 AM', '02:00 PM', '04:00 PM']
    },
    {
        id: 24,
        name: 'Dr. Robert Hayes',
        specialty: 'Ear, Nose & Throat',
        avatar: '👨‍⚕️',
        availableDates: ['2026-03-21', '2026-03-23', '2026-03-25', '2026-03-26', '2026-03-27', '2026-03-28', '2026-03-29', '2026-03-30', '2026-04-01', '2026-04-02', '2026-04-04', '2026-04-05', '2026-04-07', '2026-04-08', '2026-04-09'],
        availableTimes: ['10:00 AM', '12:00 PM', '03:00 PM']
    }
];

/**
 * Return array of next N dates (ISO YYYY-MM-DD) starting from today
 */
// return an array of N dates (ISO YYYY-MM-DD) starting from today plus an optional offset
// offsetDays = 0 will start with today, offsetDays = 5 will start with five days from today, etc.
function getLocalISODate(dateObj) {
    const year = dateObj.getFullYear();
    const month = String(dateObj.getMonth() + 1).padStart(2, '0');
    const day = String(dateObj.getDate()).padStart(2, '0');
    return `${year}-${month}-${day}`;
}

function getNextNDates(n, offsetDays = 0) {
    const dates = [];
    const start = new Date();
    start.setHours(0,0,0,0);
    if (offsetDays) {
        start.setDate(start.getDate() + offsetDays);
    }
    for (let i = 0; i < n; i++) {
        const d = new Date(start);
        d.setDate(start.getDate() + i);
        dates.push(getLocalISODate(d));
    }
    return dates;
}

/**
 * Parse a time string like '09:30 AM' combined with an ISO date 'YYYY-MM-DD'
 * and return a Date object representing that local datetime.
 */
function parseTimeToDate(dateISO, timeStr) {
    try {
        const [timePart, meridiem] = timeStr.trim().split(' ');
        const [hh, mm] = timePart.split(':').map(Number);
        let hours = hh % 12;
        if (meridiem && meridiem.toUpperCase() === 'PM') hours += 12;
        const d = new Date(dateISO);
        d.setHours(hours, mm || 0, 0, 0);
        return d;
    } catch (e) {
        return new Date(dateISO);
    }
}

/**
 * Return true if the given time on dateISO is strictly in the future.
 */
function isTimeInFuture(dateISO, timeStr) {
    const timeDate = parseTimeToDate(dateISO, timeStr);
    return timeDate.getTime() > Date.now();
}

// ============================================
// PAGE LOAD - CHECK AUTHENTICATION
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // Check if user is on protected pages and not logged in
    if (currentPage === 'doctors.html' || currentPage === 'dashboard.html') {
        checkAuthenticationForProtectedPages();
    } else if (currentPage === 'admin.html') {
        checkAuthenticationForAdminPages();
    }
    
    // Initialize specific pages
    if (currentPage === 'doctors.html') {
        initializeDoctorsPage();
    } else if (currentPage === 'dashboard.html') {
        initializeDashboard();
    } else if (currentPage === 'signup.html') {
        initializeSignUpPage();
    } else if (currentPage === 'login.html') {
        initializeLoginPage();
    } else if (currentPage === 'admin-login.html') {
        initializeAdminLoginPage();
    } else if (currentPage === 'admin.html') {
        initializeAdminDashboard();
    }
});

// ============================================
// AUTHENTICATION FUNCTIONS
// ============================================

/**
 * Check if user is authenticated for protected pages
 */
function checkAuthenticationForProtectedPages() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    
    if (!isLoggedIn || isLoggedIn !== 'true') {
        alert('Please login to access this page.');
        window.location.href = 'login.html';
    }
}

/**
 * Check if admin is authenticated for admin pages
 */
function checkAuthenticationForAdminPages() {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userType = localStorage.getItem('userType');
    
    if (!isLoggedIn || isLoggedIn !== 'true' || userType !== 'admin') {
        alert('Access denied. Admin login required.');
        window.location.href = 'admin-login.html';
    }
}

/**
 * Redirect to login page
 */
function redirectToLogin() {
    window.location.href = 'login.html';
}

/**
 * Redirect to sign up page
 */
function redirectToSignUp() {
    window.location.href = 'signup.html';
}

/**
 * Redirect to admin login page
 */
function redirectToAdminLogin() {
    window.location.href = 'admin-login.html';
}

/**
 * Logout function
 */
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userType');
    alert('You have been logged out successfully.');
    window.location.href = 'index.html';
}

// ============================================
// SIGN UP PAGE FUNCTIONS
// ============================================

/**
 * Initialize sign up page
 */
function initializeSignUpPage() {
    const signupForm = document.getElementById('signupForm');
    if (signupForm) {
        signupForm.addEventListener('submit', handleSignUp);
    }
}

/**
 * Handle sign up form submission
 */
function handleSignUp(e) {
    e.preventDefault();
    
    // Clear previous errors
    clearSignUpErrors();
    
    // Get form values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    // Validation
    let isValid = true;
    
    if (!name) {
        showError('nameError', 'Please enter your full name');
        isValid = false;
    }
    
    if (!email) {
        showError('emailError', 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('emailError', 'Please enter a valid email');
        isValid = false;
    }
    
    if (!password) {
        showError('passwordError', 'Please enter a password');
        isValid = false;
    } else if (password.length < 6) {
        showError('passwordError', 'Password must be at least 6 characters');
        isValid = false;
    }
    
    if (!confirmPassword) {
        showError('confirmError', 'Please confirm your password');
        isValid = false;
    } else if (password !== confirmPassword) {
        showError('confirmError', 'Passwords do not match');
        isValid = false;
    }
    
    // Check if email already exists
    if (isValid) {
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const emailExists = users.some(user => user.email === email);
        
        if (emailExists) {
            showError('emailError', 'Email already registered. Please use another email.');
            isValid = false;
        }
    }
    
    // If all validations pass
    if (isValid) {
        // Create user object
        const newUser = {
            id: Date.now(),
            name: name,
            email: email,
            password: password // In production, this should be hashed
        };
        
        // Store user in localStorage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        users.push(newUser);
        localStorage.setItem('users', JSON.stringify(users));
        
        // Show success message and redirect
        alert('Sign up successful! Please login with your credentials.');
        window.location.href = 'login.html';
    }
}

/**
 * Show error message for a field
 */
function showError(elementId, message) {
    const errorElement = document.getElementById(elementId);
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.style.display = 'block';
    }
}

/**
 * Clear all sign up form errors
 */
function clearSignUpErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(elem => {
        elem.textContent = '';
        elem.style.display = 'none';
    });
}

// ============================================
// LOGIN PAGE FUNCTIONS
// ============================================

/**
 * Initialize login page
 */
function initializeLoginPage() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
}

/**
 * Initialize admin login page
 */
function initializeAdminLoginPage() {
    const adminLoginForm = document.getElementById('adminLoginForm');
    if (adminLoginForm) {
        adminLoginForm.addEventListener('submit', handleAdminLogin);
    }
}

/**
 * Handle login form submission
 */
function handleLogin(e) {
    e.preventDefault();
    
    // Clear previous errors
    clearLoginErrors();
    
    // Get form values
    const email = document.getElementById('loginEmail').value.trim();
    const password = document.getElementById('loginPassword').value;
    const userType = document.getElementById('userType').value;
    
    // Validation
    let isValid = true;
    
    if (!email) {
        showError('loginEmailError', 'Please enter your email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('loginEmailError', 'Please enter a valid email');
        isValid = false;
    }
    
    if (!password) {
        showError('loginPasswordError', 'Please enter your password');
        isValid = false;
    }
    
    if (!isValid) {
        return;
    }
    
    // Check if admin login
    if (userType === 'admin') {
        if (email === 'admin@medicare.com' && password === 'admin123') {
            // Successfully logged in as admin
            localStorage.setItem('isLoggedIn', 'true');
            localStorage.setItem('userType', 'admin');
            localStorage.setItem('currentUser', JSON.stringify({
                name: 'Administrator',
                email: 'admin@medicare.com',
                role: 'admin'
            }));
            
            alert('Admin login successful! Welcome Administrator');
            window.location.href = 'admin.html';
            return;
        } else {
            // Invalid admin credentials
            const loginErrorDiv = document.getElementById('loginError');
            if (loginErrorDiv) {
                loginErrorDiv.textContent = 'Invalid admin credentials. Access denied.';
                loginErrorDiv.style.display = 'block';
            }
            return;
        }
    }
    
    // Check patient credentials
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
        // Successfully logged in
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userType', 'patient');
        localStorage.setItem('currentUser', JSON.stringify({
            id: user.id,
            name: user.name,
            email: user.email
        }));
        
        alert('Login successful! Welcome ' + user.name);
        window.location.href = 'dashboard.html';
    } else {
        // Invalid credentials
        const loginErrorDiv = document.getElementById('loginError');
        if (loginErrorDiv) {
            loginErrorDiv.textContent = 'Invalid email or password. Please try again.';
            loginErrorDiv.style.display = 'block';
        }
    }
}

/**
 * Handle admin login form submission
 */
function handleAdminLogin(e) {
    e.preventDefault();
    
    // Clear previous errors
    clearAdminLoginErrors();
    
    // Get form values
    const email = document.getElementById('adminEmail').value.trim();
    const password = document.getElementById('adminPassword').value;
    
    // Validation
    let isValid = true;
    
    if (!email) {
        showError('adminEmailError', 'Please enter admin email');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('adminEmailError', 'Please enter a valid email');
        isValid = false;
    }
    
    if (!password) {
        showError('adminPasswordError', 'Please enter access code');
        isValid = false;
    }
    
    if (!isValid) {
        return;
    }
    
    // Check admin credentials
    if (email === 'admin@medicare.com' && password === 'admin123') {
        // Successfully logged in as admin
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userType', 'admin');
        localStorage.setItem('currentUser', JSON.stringify({
            name: 'Administrator',
            email: 'admin@medicare.com',
            role: 'admin'
        }));
        
        alert('Admin login successful! Welcome Administrator');
        window.location.href = 'admin.html';
    } else {
        // Invalid credentials
        const adminLoginErrorDiv = document.getElementById('adminLoginError');
        if (adminLoginErrorDiv) {
            adminLoginErrorDiv.textContent = 'Invalid admin credentials. Access denied.';
            adminLoginErrorDiv.style.display = 'block';
        }
    }
}

/**
 * Clear all login form errors
 */
function clearLoginErrors() {
    const errorElements = document.querySelectorAll('.error-message');
    errorElements.forEach(elem => {
        elem.textContent = '';
        elem.style.display = 'none';
    });
    
    const loginErrorDiv = document.getElementById('loginError');
    if (loginErrorDiv) {
        loginErrorDiv.style.display = 'none';
    }
}

/**
 * Clear all admin login form errors
 */
function clearAdminLoginErrors() {
    const errorElements = document.querySelectorAll('#adminLoginForm .error-message');
    errorElements.forEach(elem => {
        elem.textContent = '';
        elem.style.display = 'none';
    });
    
    const adminLoginErrorDiv = document.getElementById('adminLoginError');
    if (adminLoginErrorDiv) {
        adminLoginErrorDiv.style.display = 'none';
    }
}

// ============================================
// DOCTORS PAGE FUNCTIONS
// ============================================

/**
 * Initialize doctors page
 */
function initializeDoctorsPage() {
    // Display user greeting
    displayUserGreeting();
    
    // Render doctors
    renderDoctors(doctorsData);
    
    // Initialize booking form
    initializeBookingForm();
}

/**
 * Display user greeting
 */
function displayUserGreeting() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const userGreeting = document.getElementById('userGreeting');
    
    if (currentUser && userGreeting) {
        userGreeting.textContent = 'Welcome, ' + currentUser.name + '!';
    }
}

/**
 * Render doctors dynamically
 */
function renderDoctors(doctors) {
    const doctorsGrid = document.getElementById('doctorsGrid');
    const noResults = document.getElementById('noResults');
    
    if (!doctorsGrid) return;
    
    doctorsGrid.innerHTML = '';
    
    if (doctors.length === 0) {
        noResults.style.display = 'block';
        return;
    }
    
    noResults.style.display = 'none';
    
    doctors.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'doctor-card';
        doctorCard.innerHTML = `
            <div class="doctor-avatar">${doctor.avatar}</div>
            <h3 class="doctor-name">${doctor.name}</h3>
            <p class="doctor-specialty">${doctor.specialty}</p>
            <div class="doctor-info-item">
                <strong>Available Dates:</strong>
                <span>${doctor.availableDates.length} dates</span>
            </div>
            <div class="doctor-info-item">
                <strong>Available Times:</strong>
                <span>${doctor.availableTimes.length} slots</span>
            </div>
            <button class="btn-book" onclick="openBookingModal(${doctor.id})">Book Appointment</button>
        `;
        
        doctorsGrid.appendChild(doctorCard);
    });
}

/**
 * Filter doctors based on search input
 */
function filterDoctors() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const specialtyFilter = document.getElementById('specialtyFilter').value;
    
    let filteredDoctors = doctorsData.filter(doctor => {
        const matchesSearch = doctor.name.toLowerCase().includes(searchInput);
        const matchesSpecialty = !specialtyFilter || doctor.specialty === specialtyFilter;
        return matchesSearch && matchesSpecialty;
    });
    
    renderDoctors(filteredDoctors);
}

/**
 * Get all doctors in the same specialty
 */
function getDoctorsInSpecialty(specialty) {
    return doctorsData.filter(d => d.specialty === specialty);
}

/**
 * Update selected doctor in booking modal
 */
function updateSelectedDoctorInBooking() {
    const selectedDoctorId = parseInt(document.getElementById('specialtyDoctorSelect').value);
    if (selectedDoctorId) {
        window.selectedDoctorId = selectedDoctorId;
        populateDatesForCurrentDoctor();
    }
}

/**
 * Populate dates for currently selected doctor
 */
function populateDatesForCurrentDoctor() {
    const doctor = doctorsData.find(d => d.id === window.selectedDoctorId);
    if (!doctor) return;
    
    const dateSelect = document.getElementById('appointmentDate');
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (dateSelect && currentUser) {
        dateSelect.innerHTML = '<option value="">-- Choose a date --</option>';
        const nextDates = getNextNDates(6);

        let doctorDates = doctor.availableDates && doctor.availableDates.length > 0
            ? nextDates.filter(date => doctor.availableDates.includes(date))
            : nextDates;

        if (doctorDates.length === 0) {
            doctorDates = nextDates;
        }

        const availableDates = doctorDates.filter(date => {
            return hasAvailableTimesForDate(doctor, date, currentUser);
        });

        if (availableDates.length === 0) {
            dateSelect.innerHTML = '<option value="">-- No available dates (quota reached or no open slots) --</option>';
            document.getElementById('slotsAvailableMessage').textContent = '❌ No available booking slots in the next 6 days. Cancel an existing appointment or choose another doctor.';
            dateSelect.disabled = true;
            return;
        }

        dateSelect.disabled = false;
        availableDates.forEach(date => {
            const option = document.createElement('option');
            option.value = date;
            const remaining = getRemainingSlots(currentUser.email, date);
            const slotText = remaining === 3 ? 'Available' : `${remaining} slot${remaining !== 1 ? 's' : ''} left`;
            option.textContent = new Date(date).toLocaleDateString('en-US', {
                weekday: 'short',
                year: 'numeric',
                month: 'short',
                day: 'numeric'
            }) + ` (${slotText})`;
            dateSelect.appendChild(option);
        });

        let selectedDate = availableDates.find(date => hasAvailableTimesForDate(doctor, date, currentUser));
        if (!selectedDate && availableDates.length > 0) {
            selectedDate = availableDates[0];
        }

        if (selectedDate) {
            dateSelect.value = selectedDate;
            populateTimeOptionsForDate(selectedDate);
            updateAppointmentSummary();
            
            const remaining = getRemainingSlots(currentUser.email, selectedDate);
            const msgText = remaining === 3 ? '✅ All 3 slots available for this date'
                           : remaining === 2 ? '⚠️ 2 slots left for this date'
                           : remaining === 1 ? '🔴 Only 1 slot remaining for this date'
                           : '❌ No slots available for this date';
            document.getElementById('slotsAvailableMessage').textContent = msgText;
        }
    }
}

// ============================================
// BOOKING MODAL FUNCTIONS
// ============================================

/**
 * Open booking modal for a specific doctor
 */
function openBookingModal(doctorId) {
    const doctor = doctorsData.find(d => d.id === doctorId);
    
    if (!doctor) return;
    
    // Store selected doctor ID
    window.selectedDoctorId = doctorId;
    
    // Display doctor info
    const doctorInfoDiv = document.getElementById('doctorInfo');
    if (doctorInfoDiv) {
        doctorInfoDiv.innerHTML = `
            <div class="doctor-info-detail">
                <strong>Specialty:</strong> ${doctor.specialty}
            </div>
        `;
    }

    // Populate doctor selector with all doctors in the same specialty
    const doctorSelect = document.getElementById('specialtyDoctorSelect');
    if (doctorSelect) {
        doctorSelect.innerHTML = '<option value="">-- Choose a doctor --</option>';
        const doctorsInSpecialty = getDoctorsInSpecialty(doctor.specialty);
        
        doctorsInSpecialty.forEach(doc => {
            const option = document.createElement('option');
            option.value = doc.id;
            option.textContent = `${doc.name}`;
            if (doc.id === doctorId) {
                option.selected = true;
            }
            doctorSelect.appendChild(option);
        });
    }
    
    // Populate available dates for selected doctor
    populateDatesForCurrentDoctor();
    
    // Note: times are already populated for the computed default date in populateDatesForCurrentDoctor
    // Do not reset them here or it will clear the default options.
    const timeSelect = document.getElementById('appointmentTime');
    if (timeSelect) {
        timeSelect.disabled = false;
    }
    
    // Show modal
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'block';
    }
}

/**
 * Close booking modal
 */
function closeBookingModal() {
    const modal = document.getElementById('bookingModal');
    if (modal) {
        modal.style.display = 'none';
    }
}

/**
 * Close modal when clicking outside of it
 */
document.addEventListener('click', function(event) {
    // Close booking modal when clicking outside
    const bookingModal = document.getElementById('bookingModal');
    if (bookingModal && event.target === bookingModal) {
        closeBookingModal();
    }
    
    // Close cancel modal when clicking outside
    const cancelModal = document.getElementById('cancelModal');
    if (cancelModal && event.target === cancelModal) {
        closeCancelModal();
    }
    
    // Close reschedule modal when clicking outside
    const rescheduleModal = document.getElementById('rescheduleModal');
    if (rescheduleModal && event.target === rescheduleModal) {
        closeRescheduleModal();
    }
});

/**
 * Close modals with Escape key
 */
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const bookingModal = document.getElementById('bookingModal');
        if (bookingModal && bookingModal.style.display === 'block') {
            closeBookingModal();
        }
        
        const cancelModal = document.getElementById('cancelModal');
        if (cancelModal && cancelModal.style.display === 'block') {
            closeCancelModal();
        }
        
        const rescheduleModal = document.getElementById('rescheduleModal');
        if (rescheduleModal && rescheduleModal.style.display === 'block') {
            closeRescheduleModal();
        }
    }
});

/**
 * Populate time options for a given date and the currently selected doctor
 * Only includes slots that are in the future relative to now.
 */
function populateTimeOptionsForDate(dateISO) {
    const timeSelect = document.getElementById('appointmentTime');
    if (!timeSelect) return;
    timeSelect.innerHTML = '<option value="">-- Choose a time --</option>';
    if (!dateISO || !window.selectedDoctorId) return;

    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    // LOOPHOLE FIX: Block time selection if date is at capacity
    if (currentUser && getRemainingSlots(currentUser.email, dateISO) <= 0) {
        timeSelect.innerHTML = '<option value="">-- No slots available for this date --</option>';
        timeSelect.disabled = true;
        return;
    }
    
    timeSelect.disabled = false;
    const doctor = doctorsData.find(d => d.id === window.selectedDoctorId);
    if (!doctor) return;

    doctor.availableTimes.forEach(time => {
        if (isTimeInFuture(dateISO, time)) {
            const option = document.createElement('option');
            option.value = time;
            option.textContent = time;
            timeSelect.appendChild(option);
        }
    });
}

/**
 * Initialize booking form
 */
function initializeBookingForm() {
    const bookingForm = document.getElementById('bookingForm');
    if (bookingForm) {
        bookingForm.addEventListener('submit', handleBookingSubmit);
    }
    
    // Add event listeners for date and time changes to show summary
    const dateSelect = document.getElementById('appointmentDate');
    const timeSelect = document.getElementById('appointmentTime');
    
    if (dateSelect) {
        dateSelect.addEventListener('change', function() {
            populateTimeOptionsForDate(this.value);
            updateAppointmentSummary();
            
            // Update slot message (LOOPHOLE FIX)
            if (this.value) {
                const currentUser = JSON.parse(localStorage.getItem('currentUser'));
                if (currentUser) {
                    const remaining = getRemainingSlots(currentUser.email, this.value);
                    const msgText = remaining === 3 ? '✅ All 3 slots available for this date'
                                   : remaining === 2 ? '⚠️ 2 slots left for this date'
                                   : remaining === 1 ? '🔴 Only 1 slot remaining for this date'
                                   : '❌ No slots available for this date';
                    document.getElementById('slotsAvailableMessage').textContent = msgText;
                }
            }
        });
    }
    
    if (timeSelect) {
        timeSelect.addEventListener('change', updateAppointmentSummary);
    }
}

/**
 * Update appointment summary when date/time changes
 */
function updateAppointmentSummary() {
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const appointmentSummary = document.getElementById('appointmentSummary');
    
    if (appointmentDate && appointmentTime) {
        const doctor = doctorsData.find(d => d.id === window.selectedDoctorId);
        
        if (doctor) {
            document.getElementById('summaryDoctor').textContent = doctor.name + ' (' + doctor.specialty + ')';
            document.getElementById('summaryDate').textContent = new Date(appointmentDate).toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric'
            });
            document.getElementById('summaryTime').textContent = appointmentTime;
            
            appointmentSummary.style.display = 'block';
        }
    } else if (appointmentSummary) {
        appointmentSummary.style.display = 'none';
    }
}

/**
 * Handle booking form submission
 */
function countUserAppointmentsOnDate(userEmail, dateISO) {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    return appointments.filter(apt => {
        const aptDate = apt.date || apt.appointmentDate;
        const status = (apt.status || 'scheduled').toLowerCase();
        return apt.bookedBy === userEmail && aptDate === dateISO && status !== 'cancelled';
    }).length;
}

function getRemainingSlots(userEmail, dateISO) {
    const count = countUserAppointmentsOnDate(userEmail, dateISO);
    return Math.max(0, 3 - count);
}

function hasAvailableTimesForDate(doctor, dateISO, currentUser) {
    if (!doctor || !dateISO || !currentUser || !currentUser.email) return false;
    if (getRemainingSlots(currentUser.email, dateISO) <= 0) return false;

    return doctor.availableTimes.some(time => {
        return isTimeInFuture(dateISO, time) && !isSlotAlreadyBooked(doctor.id, dateISO, time);
    });
}

function isSlotAlreadyBooked(doctorId, dateISO, time, excludeAppointmentId = null) {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    return appointments.some(apt => {
        const aptDate = apt.date || apt.appointmentDate;
        const aptTime = apt.time || apt.appointmentTime;
        const status = (apt.status || 'scheduled').toLowerCase();
        if (status === 'cancelled') return false;
        if (excludeAppointmentId && apt.id === excludeAppointmentId) return false;

        return apt.doctorId === doctorId && aptDate === dateISO && aptTime === time;
    });
}

function handleBookingSubmit(e) {
    e.preventDefault();
    
    const appointmentDate = document.getElementById('appointmentDate').value;
    const appointmentTime = document.getElementById('appointmentTime').value;
    const appointmentReason = document.getElementById('appointmentReason').value.trim();
    
    // Validate selections
    if (!appointmentDate) {
        alert('Please select an appointment date.');
        return;
    }
    
    if (!appointmentTime) {
        alert('Please select an appointment time.');
        return;
    }
    
    // Find doctor details
    const doctor = doctorsData.find(d => d.id === window.selectedDoctorId);
    
    if (!doctor) {
        alert('Error: Doctor not found. Please try again.');
        return;
    }
    
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (!currentUser || !currentUser.email) {
        alert('Error: User not logged in. Please logout and login again.');
        return;
    }

    const userTodayCount = countUserAppointmentsOnDate(currentUser.email, appointmentDate);
    if (userTodayCount >= 3) {
        alert('❌ Cannot book: You already have 3 active appointments on this date. Cancel one to book another.');
        return;
    }

    if (getRemainingSlots(currentUser.email, appointmentDate) <= 0) {
        alert('❌ No slots available on this date. Please choose another date.');
        return;
    }

    if (isSlotAlreadyBooked(doctor.id, appointmentDate, appointmentTime)) {
        alert('❌ This slot is already booked. Please choose a different time.');
        return;
    }

    const userDuplicateAppointment = (JSON.parse(localStorage.getItem('appointments')) || []).some(apt => {
        const aptDate = apt.date || apt.appointmentDate;
        const aptTime = apt.time || apt.appointmentTime;
        const status = (apt.status || 'scheduled').toLowerCase();

        return apt.bookedBy === currentUser.email && apt.doctorId === doctor.id && aptDate === appointmentDate && aptTime === appointmentTime && status !== 'cancelled';
    });

    if (userDuplicateAppointment) {
        alert('❌ You have already booked this exact doctor/date/time combination.');
        return;
    }

    const appointment = {
        id: Date.now(),
        doctorId: doctor.id,
        doctorName: doctor.name,
        doctorSpecialty: doctor.specialty,
        doctorAvatar: doctor.avatar,
        date: appointmentDate,
        time: appointmentTime,
        reason: appointmentReason || 'Not specified',
        patientName: currentUser.name,
        patientEmail: currentUser.email,
        patientPhone: currentUser.phone || 'Not provided',
        bookedBy: currentUser.email,
        bookingDate: new Date().toISOString(),
        status: 'confirmed'
    };
    
    try {
        // Store appointment in localStorage
        const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
        appointments.push(appointment);
        localStorage.setItem('appointments', JSON.stringify(appointments));
        
        // Show success message
        const dateObj = new Date(appointmentDate);
        const formattedDate = dateObj.toLocaleDateString('en-US', {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
        
        alert('✅ Appointment booked successfully!\n\nDoctor: ' + doctor.name + 
              '\nSpecialty: ' + doctor.specialty +
              '\nDate: ' + formattedDate + 
              '\nTime: ' + appointmentTime + 
              '\n\nYou can view and manage your appointment in your Dashboard.');
        
        // Close modal and reset form
        closeBookingModal();
        document.getElementById('bookingForm').reset();
        document.getElementById('appointmentSummary').style.display = 'none';
    } catch (error) {
        console.error('Error booking appointment:', error);
        alert('Error: Failed to book appointment. Please try again.');
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

/**
 * Validate email format
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Toggle FAQ items
 */
function toggleFAQ(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open the clicked item if it wasn't active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// ============================================
// DASHBOARD FUNCTIONS
// ============================================

/**
 * Initialize dashboard page
 */
function initializeDashboard() {
    // Display user info
    displayDashboardUserInfo();
    
    // Load and display appointments
    loadAndDisplayAppointments();
    
    // Initialize reschedule form
    initializeRescheduleForm();
}

/**
 * Display user information on dashboard
 */
function displayDashboardUserInfo() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    
    if (currentUser) {
        document.getElementById('userGreeting').textContent = 'Welcome, ' + currentUser.name + '!';
        document.getElementById('userName').textContent = currentUser.name;
        document.getElementById('userEmail').textContent = currentUser.email;
    }
}

/**
 * Load and display all appointments
 */
function loadAndDisplayAppointments() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser'));
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
    // Filter appointments for current user
    const userAppointments = appointments.filter(apt => apt.bookedBy === currentUser.email);
    
    // Get today's date
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    
    // Separate upcoming and completed appointments
    const upcoming = userAppointments.filter(apt => {
        const aptDate = new Date(apt.date || apt.appointmentDate);
        aptDate.setHours(0, 0, 0, 0);
        return aptDate >= today && apt.status !== 'cancelled';
    }).sort((a, b) => new Date(a.date || a.appointmentDate) - new Date(b.date || b.appointmentDate));
    
    const history = userAppointments.filter(apt => {
        const aptDate = new Date(apt.date || apt.appointmentDate);
        aptDate.setHours(0, 0, 0, 0);
        return aptDate < today || apt.status === 'cancelled';
    }).sort((a, b) => new Date(b.date || b.appointmentDate) - new Date(a.date || a.appointmentDate));
    
    // Update stats
    updateAppointmentStats(userAppointments, upcoming, history);
    
    // Display upcoming appointments
    displayAppointmentsList(upcoming, 'upcomingAppointmentsContainer', 'noUpcomingMessage');
    
    // Display appointment history
    displayAppointmentsList(history, 'appointmentHistoryContainer', 'noHistoryMessage');
}

/**
 * Update appointment statistics
 */
function updateAppointmentStats(all, upcoming, history) {
    document.getElementById('totalAppointments').textContent = all.length;
    document.getElementById('upcomingAppointments').textContent = upcoming.length;
    document.getElementById('completedAppointments').textContent = history.filter(a => a.status !== 'cancelled').length;
}

/**
 * Display list of appointments
 */
function displayAppointmentsList(appointments, containerId, emptyMessageId) {
    const container = document.getElementById(containerId);
    const emptyMessage = document.getElementById(emptyMessageId);
    
    if (container && appointments.length === 0) {
        container.innerHTML = '';
        emptyMessage.style.display = 'block';
        return;
    }
    
    if (container) {
        container.innerHTML = '';
    }
    emptyMessage.style.display = 'none';
    
    appointments.forEach(apt => {
        const appointmentCard = createAppointmentCard(apt);
        if (container) {
            container.appendChild(appointmentCard);
        }
    });
}

/**
 * Create appointment card element
 */
function createAppointmentCard(appointment) {
    const card = document.createElement('div');
    card.className = 'appointment-card';
    
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const aptDate = new Date(appointment.date || appointment.appointmentDate);
    aptDate.setHours(0, 0, 0, 0);
    
    let status = 'upcoming';
    let statusClass = 'status-upcoming';
    
    if (appointment.status === 'cancelled') {
        status = 'Cancelled';
        statusClass = 'status-cancelled';
    } else if (aptDate < today) {
        status = 'Completed';
        statusClass = 'status-completed';
    }
    
    const dateObj = new Date(appointment.date || appointment.appointmentDate);
    const formattedDate = dateObj.toLocaleDateString('en-US', { 
        weekday: 'short', 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric' 
    });
    
    const actionButtons = status === 'upcoming' ? `
        <div class="appointment-actions">
            <button class="btn-reschedule" onclick="openRescheduleModal(${appointment.id})">Reschedule</button>
            <button class="btn-cancel" onclick="openCancelModal(${appointment.id})">Cancel</button>
        </div>
    ` : '';
    
    card.innerHTML = `
        <div class="appointment-header">
            <div class="appointment-doctor">
                <div class="appointment-avatar">${appointment.doctorAvatar || '👨‍⚕️'}</div>
                <div class="appointment-info">
                    <h3>${appointment.doctorName}</h3>
                    <p class="appointment-specialty">${appointment.doctorSpecialty}</p>
                </div>
            </div>
            <span class="appointment-status ${statusClass}">${status}</span>
        </div>
        
        <div class="appointment-details">
            <div class="detail-item">
                <span class="detail-label">📅 Date</span>
                <span class="detail-value">${formattedDate}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">⏰ Time</span>
                <span class="detail-value">${appointment.time || appointment.appointmentTime}</span>
            </div>
            <div class="detail-item">
                <span class="detail-label">📝 Reason</span>
                <span class="detail-value">${appointment.reason || 'Not specified'}</span>
            </div>
        </div>
        ${actionButtons}
    `;
    
    return card;
}

/**
 * Switch between tabs
 */
function switchTab(tabName) {
    // Hide all tabs
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    
    // Remove active class from all buttons
    document.querySelectorAll('.tab-button').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName + 'Tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    const buttons = document.querySelectorAll('.tab-button');
    buttons.forEach(btn => {
        if ((tabName === 'upcoming' && btn.textContent.includes('Upcoming')) ||
            (tabName === 'history' && btn.textContent.includes('History'))) {
            btn.classList.add('active');
        }
    });
}

/**
 * Open cancel appointment modal
 */
function openCancelModal(appointmentId) {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const appointment = appointments.find(apt => apt.id === appointmentId);
    
    if (appointment) {
        window.currentCancelAppointmentId = appointmentId;
        
        const dateObj = new Date(appointment.date || appointment.appointmentDate);
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        document.getElementById('cancelDetails').innerHTML = `
            <p><strong>Doctor:</strong> ${appointment.doctorName}</p>
            <p><strong>Specialty:</strong> ${appointment.doctorSpecialty}</p>
            <p><strong>Date:</strong> ${formattedDate}</p>
            <p><strong>Time:</strong> ${appointment.time || appointment.appointmentTime}</p>
        `;
        
        document.getElementById('cancelModal').style.display = 'block';
    }
}

/**
 * Close cancel modal
 */
function closeCancelModal() {
    document.getElementById('cancelModal').style.display = 'none';
    document.getElementById('cancellationReason').value = '';
}

/**
 * Confirm appointment cancellation
 */
function confirmCancel() {
    const appointmentId = window.currentCancelAppointmentId;
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
    const appointmentIndex = appointments.findIndex(apt => apt.id === appointmentId);
    if (appointmentIndex > -1) {
        appointments[appointmentIndex].status = 'cancelled';
        appointments[appointmentIndex].cancellationReason = document.getElementById('cancellationReason').value;
        
        localStorage.setItem('appointments', JSON.stringify(appointments));
        closeCancelModal();
        
        alert('Your appointment has been cancelled successfully.');
        loadAndDisplayAppointments();
    }
}

/**
 * Open reschedule modal
 */
function openRescheduleModal(appointmentId) {
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    const appointment = appointments.find(apt => apt.id === appointmentId);
    
    if (appointment) {
        window.currentRescheduleAppointmentId = appointmentId;
        
        // Find the doctor
        const doctor = doctorsData.find(d => d.name === appointment.doctorName);
        
        const dateObj = new Date(appointment.date || appointment.appointmentDate);
        const formattedDate = dateObj.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
        
        document.getElementById('rescheduleDetails').innerHTML = `
            <p><strong>Doctor:</strong> ${appointment.doctorName}</p>
            <p><strong>Current Date & Time:</strong> ${formattedDate} at ${appointment.time || appointment.appointmentTime}</p>
        `;
        
        // Populate date options (only future dates, starting from today+5 days)
        const dateSelect = document.getElementById('newDate');
        dateSelect.innerHTML = '<option value="">-- Choose a date --</option>';
        const today = new Date();
        today.setHours(0,0,0,0);
        const minDate = today; // allow today through next days

        if (doctor) {
            doctor.availableDates.forEach(date => {
                const d = new Date(date);
                d.setHours(0,0,0,0);
                if (d >= minDate) {
                    const option = document.createElement('option');
                    option.value = date;
                    const dateObj = new Date(date);
                    option.textContent = dateObj.toLocaleDateString('en-US', { 
                        weekday: 'short', 
                        month: 'short', 
                        day: 'numeric' 
                    });
                    dateSelect.appendChild(option);
                }
            });
        }
        
        // Clear time selection
        document.getElementById('newTime').innerHTML = '<option value="">-- Choose a time --</option>';
        
        // Add event listener to date select to populate times (future-only)
        dateSelect.onchange = function() {
            const timeSelect = document.getElementById('newTime');
            timeSelect.innerHTML = '<option value="">-- Choose a time --</option>';
            
            if (doctor && this.value) {
                doctor.availableTimes.forEach(time => {
                    if (isTimeInFuture(this.value, time)) {
                        const option = document.createElement('option');
                        option.value = time;
                        option.textContent = time;
                        timeSelect.appendChild(option);
                    }
                });
            }
        };
        
        document.getElementById('rescheduleModal').style.display = 'block';
    }
}

/**
 * Close reschedule modal
 */
function closeRescheduleModal() {
    document.getElementById('rescheduleModal').style.display = 'none';
    document.getElementById('rescheduleForm').reset();
}

/**
 * Initialize reschedule form
 */
function initializeRescheduleForm() {
    const rescheduleForm = document.getElementById('rescheduleForm');
    if (rescheduleForm) {
        rescheduleForm.addEventListener('submit', handleReschedule);
    }
}

/**
 * Handle reschedule form submission
 */
function handleReschedule(e) {
    e.preventDefault();
    
    const newDate = document.getElementById('newDate').value;
    const newTime = document.getElementById('newTime').value;
    
    if (!newDate || !newTime) {
        alert('Please select both date and time.');
        return;
    }
    
    const appointmentId = window.currentRescheduleAppointmentId;
    const appointments = JSON.parse(localStorage.getItem('appointments')) || [];
    
    const appointmentIndex = appointments.findIndex(apt => apt.id === appointmentId);
    if (appointmentIndex > -1) {
        const appointmentToReschedule = appointments[appointmentIndex];
        const oldDate = appointmentToReschedule.date || appointmentToReschedule.appointmentDate;
        const oldTime = appointmentToReschedule.time || appointmentToReschedule.appointmentTime;
        const bookedByEmail = appointmentToReschedule.bookedBy;
        const doctor = doctorsData.find(d => d.id === appointmentToReschedule.doctorId);

        if (!doctor) {
            alert('Error: doctor data not found for this appointment.');
            return;
        }

        // Count existing non-cancelled appointments for selected new date (excluding current appointment)
        const currentDayCount = countUserAppointmentsOnDate(bookedByEmail, newDate);
        const isSameDate = oldDate === newDate;

        if (!isSameDate && currentDayCount >= 3) {
            alert('You already have 3 active appointments on this date. Cancel one before rescheduling to this date.');
            return;
        }

        if (isSlotAlreadyBooked(doctor.id, newDate, newTime, appointmentId)) {
            alert('The chosen new date/time slot is already taken. Please select another slot.');
            return;
        }

        appointments[appointmentIndex].date = newDate;
        appointments[appointmentIndex].time = newTime;
        
        localStorage.setItem('appointments', JSON.stringify(appointments));
        closeRescheduleModal();
        
        alert(`Appointment rescheduled successfully!\nOld: ${new Date(oldDate).toLocaleDateString()} at ${oldTime}\nNew: ${new Date(newDate).toLocaleDateString()} at ${newTime}`);
        loadAndDisplayAppointments();
    }
}

/**
 * Redirect to book doctor
 */
function redirectToBookDoctor() {
    window.location.href = 'doctors.html';
}

// ============================================
// ADMIN DASHBOARD FUNCTIONS
// ============================================

/**
 * Initialize admin dashboard
 */
function initializeAdminDashboard() {
    // Check if admin is logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const userType = localStorage.getItem('userType');
    
    if (!isLoggedIn || userType !== 'admin') {
        alert('Access denied. Admin login required.');
        window.location.href = 'admin-login.html';
        return;
    }
    
    // Display admin greeting
    displayAdminGreeting();
    
    // Load admin data
    loadAdminStats();
    loadDoctorsList();
    loadAppointmentsList();
    loadUsersList();
    loadReportsData();
    
    // Initialize forms
    initializeDoctorForm();
}

/**
 * Display admin greeting
 */
function displayAdminGreeting() {
    const currentUser = JSON.parse(localStorage.getItem('currentUser') || '{}');
    const greetingElement = document.getElementById('userGreeting');
    const nameElement = document.getElementById('userName');
    const emailElement = document.getElementById('userEmail');
    
    if (greetingElement) {
        greetingElement.textContent = `Welcome, ${currentUser.name || 'Administrator'}`;
    }
    if (nameElement) {
        nameElement.textContent = currentUser.name || 'Administrator';
    }
    if (emailElement) {
        emailElement.textContent = currentUser.email || 'admin@medicare.com';
    }
}

/**
 * Load admin statistics
 */
function loadAdminStats() {
    // Total doctors
    const totalDoctorsElement = document.getElementById('totalDoctors');
    if (totalDoctorsElement) {
        totalDoctorsElement.textContent = doctorsData.length;
    }
    
    // Total appointments
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const totalAppointmentsElement = document.getElementById('totalAppointments');
    if (totalAppointmentsElement) {
        totalAppointmentsElement.textContent = appointments.length;
    }
    
    // Total users
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const totalUsersElement = document.getElementById('totalUsers');
    if (totalUsersElement) {
        totalUsersElement.textContent = users.length;
    }
    
    // Today's appointments
    const today = new Date().toISOString().split('T')[0];
    const todayAppointments = appointments.filter(apt => apt.date === today);
    const todayAppointmentsElement = document.getElementById('todayAppointments');
    if (todayAppointmentsElement) {
        todayAppointmentsElement.textContent = todayAppointments.length;
    }
}

/**
 * Load doctors list for admin
 */
function loadDoctorsList() {
    const doctorsListElement = document.getElementById('doctorsList');
    if (!doctorsListElement) return;
    
    doctorsListElement.innerHTML = '';
    
    doctorsData.forEach(doctor => {
        const doctorCard = document.createElement('div');
        doctorCard.className = 'admin-item-card';
        doctorCard.innerHTML = `
            <div class="admin-item-header">
                <div class="admin-item-avatar">${doctor.avatar}</div>
                <div class="admin-item-info">
                    <h4>${doctor.name}</h4>
                    <p>${doctor.specialty}</p>
                </div>
                <div class="admin-item-actions">
                    <button class="btn-edit" onclick="editDoctor(${doctor.id})">Edit</button>
                    <button class="btn-delete" onclick="deleteDoctor(${doctor.id})">Delete</button>
                </div>
            </div>
            <div class="admin-item-details">
                <span>📧 ${doctor.email || 'Not provided'}</span>
                <span>📞 ${doctor.phone || 'Not provided'}</span>
                <span>⭐ ${doctor.rating || 'N/A'}</span>
            </div>
        `;
        doctorsListElement.appendChild(doctorCard);
    });
}

/**
 * Enrich appointments with patient details by looking up user information
 */
function enrichAppointmentsWithPatientDetails(appointments) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    let hasChanges = false;
    
    appointments.forEach(appointment => {
        // If appointment already has patient details, skip
        if (appointment.patientName && appointment.patientEmail) {
            return;
        }
        
        // Look up patient details from users database
        const patientEmail = appointment.bookedBy || appointment.patientEmail;
        const user = users.find(u => u.email === patientEmail);
        
        if (user) {
            appointment.patientName = appointment.patientName || user.name;
            appointment.patientEmail = appointment.patientEmail || user.email;
            appointment.patientPhone = appointment.patientPhone || user.phone || 'Not provided';
            hasChanges = true;
        } else {
            // If user not found, use email as name
            appointment.patientName = appointment.patientName || patientEmail.split('@')[0];
            appointment.patientEmail = appointment.patientEmail || patientEmail;
            appointment.patientPhone = appointment.patientPhone || 'Not provided';
            hasChanges = true;
        }
        
        // Ensure consistent property names
        if (appointment.appointmentDate && !appointment.date) {
            appointment.date = appointment.appointmentDate;
        }
        if (appointment.appointmentTime && !appointment.time) {
            appointment.time = appointment.appointmentTime;
        }
        if (!appointment.status) {
            appointment.status = 'confirmed';
        }
    });
    
    // Save enriched appointments back to localStorage if changes were made
    if (hasChanges) {
        localStorage.setItem('appointments', JSON.stringify(appointments));
    }
    
    return appointments;
}

/**
 * Load appointments list for admin
 */
function loadAppointmentsList() {
    const appointmentsListElement = document.getElementById('appointmentsList');
    if (!appointmentsListElement) return;
    
    let appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    
    // Enrich appointments with patient details if missing
    appointments = enrichAppointmentsWithPatientDetails(appointments);
    
    // Apply filter if selected
    const filter = document.getElementById('appointmentFilter')?.value || 'all';
    if (filter !== 'all') {
        const now = new Date();
        appointments = appointments.filter(apt => {
            const aptDate = new Date(apt.date);
            switch (filter) {
                case 'today':
                    return aptDate.toDateString() === now.toDateString();
                case 'upcoming':
                    return aptDate >= now;
                case 'completed':
                    return apt.status === 'completed';
                default:
                    return true;
            }
        });
    }
    
    appointmentsListElement.innerHTML = '';
    
    if (appointments.length === 0) {
        appointmentsListElement.innerHTML = '<p class="empty-state">No appointments found.</p>';
        return;
    }
    
    appointments.forEach(appointment => {
        const appointmentCard = document.createElement('div');
        appointmentCard.className = 'admin-item-card';
        
        // Format the date for better display
        const appointmentDate = new Date(appointment.date);
        const formattedDate = appointmentDate.toLocaleDateString('en-US', {
            weekday: 'short',
            month: 'short',
            day: 'numeric',
            year: 'numeric'
        });
        
        appointmentCard.innerHTML = `
            <div class="admin-item-header">
                <div class="admin-item-info">
                    <h4>${appointment.patientName || 'Unknown Patient'} → ${appointment.doctorName}</h4>
                    <p>${appointment.doctorSpecialty} • ${formattedDate} at ${appointment.time}</p>
                </div>
                <div class="admin-item-status ${appointment.status || 'confirmed'}">
                    ${appointment.status || 'Confirmed'}
                </div>
            </div>
            <div class="admin-item-details">
                <span>📧 ${appointment.patientEmail || appointment.bookedBy}</span>
                <span>📞 ${appointment.patientPhone || 'N/A'}</span>
                ${appointment.reason && appointment.reason !== 'Not specified' ? `<span>📝 ${appointment.reason}</span>` : ''}
            </div>
            <div class="admin-item-actions">
                <button class="btn-view" onclick="viewAppointmentDetails(${appointment.id})">View Details</button>
                <button class="btn-edit" onclick="updateAppointmentStatus(${appointment.id}, 'completed')">Mark Complete</button>
            </div>
        `;
        appointmentsListElement.appendChild(appointmentCard);
    });
}

/**
 * Load users list for admin
 */
function loadUsersList() {
    const usersListElement = document.getElementById('usersList');
    if (!usersListElement) return;
    
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    
    usersListElement.innerHTML = '';
    
    if (users.length === 0) {
        usersListElement.innerHTML = '<p class="empty-state">No users registered yet.</p>';
        return;
    }
    
    users.forEach(user => {
        const userCard = document.createElement('div');
        userCard.className = 'admin-item-card';
        userCard.innerHTML = `
            <div class="admin-item-header">
                <div class="admin-item-avatar">👤</div>
                <div class="admin-item-info">
                    <h4>${user.name}</h4>
                    <p>${user.email}</p>
                </div>
                <div class="admin-item-actions">
                    <button class="btn-view" onclick="viewUserDetails(${user.id})">View</button>
                </div>
            </div>
            <div class="admin-item-details">
                <span>📅 Joined: ${user.createdAt || 'N/A'}</span>
            </div>
        `;
        usersListElement.appendChild(userCard);
    });
}

/**
 * Load reports data
 */
function loadReportsData() {
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    
    // Weekly appointments
    const oneWeekAgo = new Date();
    oneWeekAgo.setDate(oneWeekAgo.getDate() - 7);
    const weeklyAppointments = appointments.filter(apt => new Date(apt.date) >= oneWeekAgo);
    document.getElementById('weeklyAppointments').textContent = weeklyAppointments.length;
    
    // Monthly appointments
    const oneMonthAgo = new Date();
    oneMonthAgo.setMonth(oneMonthAgo.getMonth() - 1);
    const monthlyAppointments = appointments.filter(apt => new Date(apt.date) >= oneMonthAgo);
    document.getElementById('monthlyAppointments').textContent = monthlyAppointments.length;
    
    // Most booked doctor
    const doctorBookings = {};
    appointments.forEach(apt => {
        doctorBookings[apt.doctorName] = (doctorBookings[apt.doctorName] || 0) + 1;
    });
    const mostBookedDoctor = Object.keys(doctorBookings).reduce((a, b) => 
        doctorBookings[a] > doctorBookings[b] ? a : b, 'None');
    document.getElementById('mostBookedDoctor').textContent = mostBookedDoctor;
    
    // Average doctor rating
    const avgRating = doctorsData.reduce((sum, doc) => sum + (doc.rating || 0), 0) / doctorsData.length;
    document.getElementById('avgDoctorRating').textContent = avgRating.toFixed(1);
}

/**
 * Switch admin tabs
 */
function switchAdminTab(tabName) {
    // Hide all tabs
    const tabs = document.querySelectorAll('.tab-content');
    tabs.forEach(tab => tab.classList.remove('active'));
    
    // Remove active class from tab buttons
    const tabButtons = document.querySelectorAll('.tab-button');
    tabButtons.forEach(btn => btn.classList.remove('active'));
    
    // Show selected tab
    const selectedTab = document.getElementById(tabName + 'Tab');
    if (selectedTab) {
        selectedTab.classList.add('active');
    }
    
    // Add active class to clicked button
    const clickedButton = Array.from(tabButtons).find(btn => 
        btn.onclick.toString().includes(tabName));
    if (clickedButton) {
        clickedButton.classList.add('active');
    }
}

/**
 * Add new doctor
 */
function addNewDoctor() {
    document.getElementById('doctorModalTitle').textContent = 'Add New Doctor';
    document.getElementById('doctorForm').reset();
    document.getElementById('doctorModal').style.display = 'block';
}

/**
 * Edit doctor
 */
function editDoctor(doctorId) {
    const doctor = doctorsData.find(d => d.id === doctorId);
    if (!doctor) return;
    
    document.getElementById('doctorModalTitle').textContent = 'Edit Doctor';
    document.getElementById('doctorName').value = doctor.name;
    document.getElementById('doctorSpecialty').value = doctor.specialty;
    document.getElementById('doctorEmail').value = doctor.email || '';
    document.getElementById('doctorPhone').value = doctor.phone || '';
    document.getElementById('doctorBio').value = doctor.bio || '';
    document.getElementById('doctorExperience').value = doctor.experience || '';
    document.getElementById('doctorRating').value = doctor.rating || '';
    
    document.getElementById('doctorModal').style.display = 'block';
}

/**
 * Delete doctor
 */
function deleteDoctor(doctorId) {
    if (confirm('Are you sure you want to delete this doctor?')) {
        const index = doctorsData.findIndex(d => d.id === doctorId);
        if (index > -1) {
            doctorsData.splice(index, 1);
            loadDoctorsList();
            loadAdminStats();
        }
    }
}

/**
 * Close doctor modal
 */
function closeDoctorModal() {
    document.getElementById('doctorModal').style.display = 'none';
}

/**
 * Initialize doctor form
 */
function initializeDoctorForm() {
    const doctorForm = document.getElementById('doctorForm');
    if (doctorForm) {
        doctorForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const doctorData = {
                id: Date.now(), // Simple ID generation
                name: document.getElementById('doctorName').value,
                specialty: document.getElementById('doctorSpecialty').value,
                email: document.getElementById('doctorEmail').value,
                phone: document.getElementById('doctorPhone').value,
                bio: document.getElementById('doctorBio').value,
                experience: parseInt(document.getElementById('doctorExperience').value) || 0,
                rating: parseFloat(document.getElementById('doctorRating').value) || 0,
                avatar: '👨‍⚕️',
                availableDates: getNextNDates(7, 1),
                availableTimes: ['09:00 AM', '10:00 AM', '02:00 PM', '04:00 PM']
            };
            
            doctorsData.push(doctorData);
            loadDoctorsList();
            loadAdminStats();
            closeDoctorModal();
            
            alert('Doctor added successfully!');
        });
    }
}

/**
 * View user details
 */
function viewUserDetails(userId) {
    const users = JSON.parse(localStorage.getItem('users') || '[]');
    const user = users.find(u => u.id === userId);
    if (user) {
        alert(`User Details:\nName: ${user.name}\nEmail: ${user.email}\nPhone: ${user.phone || 'N/A'}\nJoined: ${user.createdAt || 'N/A'}`);
    }
}

/**
 * Filter appointments
 */
function filterAppointments() {
    const filter = document.getElementById('appointmentFilter').value;
    // This would need more implementation for actual filtering
    loadAppointmentsList();
}

/**
 * Placeholder functions for admin actions
 */
function viewAllAppointments() {
    switchAdminTab('appointments');
}

function manageUsers() {
    switchAdminTab('users');
}

function systemSettings() {
    alert('System settings functionality would be implemented here.');
}

/**
 * View detailed appointment information
 */
function viewAppointmentDetails(appointmentId) {
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const appointment = appointments.find(apt => apt.id === appointmentId);
    
    if (!appointment) {
        alert('Appointment not found.');
        return;
    }
    
    const bookingDate = new Date(appointment.bookingDate);
    const appointmentDate = new Date(appointment.date);
    
    const details = `
📅 Appointment Details:

👤 Patient: ${appointment.patientName || 'Unknown'}
📧 Email: ${appointment.patientEmail || appointment.bookedBy}
📞 Phone: ${appointment.patientPhone || 'Not provided'}

👨‍⚕️ Doctor: ${appointment.doctorName}
🏥 Specialty: ${appointment.doctorSpecialty}

📆 Date: ${appointmentDate.toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    })}
⏰ Time: ${appointment.time}

📝 Reason: ${appointment.reason || 'Not specified'}
📊 Status: ${appointment.status || 'Confirmed'}
🕒 Booked on: ${bookingDate.toLocaleDateString('en-US')} at ${bookingDate.toLocaleTimeString('en-US', {
        hour: '2-digit',
        minute: '2-digit'
    })}
    `;
    
    alert(details);
}

/**
 * Update appointment status
 */
function updateAppointmentStatus(appointmentId, newStatus) {
    const appointments = JSON.parse(localStorage.getItem('appointments') || '[]');
    const appointmentIndex = appointments.findIndex(apt => apt.id === appointmentId);
    
    if (appointmentIndex === -1) {
        alert('Appointment not found.');
        return;
    }
    
    appointments[appointmentIndex].status = newStatus;
    localStorage.setItem('appointments', JSON.stringify(appointments));
    
    // Refresh the appointments list
    loadAppointmentsList();
    
    alert(`Appointment status updated to: ${newStatus}`);
}

