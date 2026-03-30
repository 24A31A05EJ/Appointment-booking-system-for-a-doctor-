const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const db = require('./database');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// ============================================
// AUTH ENDPOINTS
// ============================================

/**
 * User Sign Up
 * POST /api/auth/signup
 */
app.post('/api/auth/signup', (req, res) => {
    const { name, email, password, confirmPassword } = req.body;

    // Validation
    if (!name || !email || !password) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    if (password !== confirmPassword) {
        return res.status(400).json({ success: false, message: 'Passwords do not match' });
    }

    if (password.length < 6) {
        return res.status(400).json({ success: false, message: 'Password must be at least 6 characters' });
    }

    // Hash password
    const hashedPassword = bcrypt.hashSync(password, 10);

    // Insert user
    db.run(
        `INSERT INTO users (name, email, password, userType) VALUES (?, ?, ?, 'patient')`,
        [name, email, hashedPassword],
        function(err) {
            if (err) {
                if (err.message.includes('UNIQUE constraint failed')) {
                    return res.status(400).json({ success: false, message: 'Email already registered' });
                }
                return res.status(500).json({ success: false, message: 'Database error' });
            }

            return res.status(201).json({
                success: true,
                message: 'User registered successfully',
                userId: this.lastID
            });
        }
    );
});

/**
 * User Login
 * POST /api/auth/login
 */
app.post('/api/auth/login', (req, res) => {
    const { email, password, userType } = req.body;

    // Validation
    if (!email || !password) {
        return res.status(400).json({ success: false, message: 'Email and password required' });
    }

    // Admin login
    if (userType === 'admin') {
        if (email === 'admin@medicare.com' && password === 'admin123') {
            return res.json({
                success: true,
                message: 'Admin login successful',
                user: {
                    id: 0,
                    name: 'Administrator',
                    email: 'admin@medicare.com',
                    userType: 'admin'
                }
            });
        } else {
            return res.status(401).json({ success: false, message: 'Invalid admin credentials' });
        }
    }

    // Patient login
    db.get(`SELECT * FROM users WHERE email = ?`, [email], (err, user) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        if (!user) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        // Verify password
        const isPasswordValid = bcrypt.compareSync(password, user.password);

        if (!isPasswordValid) {
            return res.status(401).json({ success: false, message: 'Invalid email or password' });
        }

        return res.json({
            success: true,
            message: 'Login successful',
            user: {
                id: user.id,
                name: user.name,
                email: user.email,
                userType: user.userType
            }
        });
    });
});

// ============================================
// DOCTORS ENDPOINTS
// ============================================

/**
 * Get All Doctors
 * GET /api/doctors
 */
app.get('/api/doctors', (req, res) => {
    db.all(`SELECT * FROM doctors`, (err, rows) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        // Parse JSON fields
        const doctors = rows.map(doctor => ({
            ...doctor,
            availableDates: JSON.parse(doctor.availableDates),
            availableTimes: JSON.parse(doctor.availableTimes)
        }));

        return res.json({ success: true, doctors });
    });
});

/**
 * Get Doctor by ID
 * GET /api/doctors/:id
 */
app.get('/api/doctors/:id', (req, res) => {
    const { id } = req.params;

    db.get(`SELECT * FROM doctors WHERE id = ?`, [id], (err, doctor) => {
        if (err) {
            return res.status(500).json({ success: false, message: 'Database error' });
        }

        if (!doctor) {
            return res.status(404).json({ success: false, message: 'Doctor not found' });
        }

        doctor.availableDates = JSON.parse(doctor.availableDates);
        doctor.availableTimes = JSON.parse(doctor.availableTimes);

        return res.json({ success: true, doctor });
    });
});

// ============================================
// APPOINTMENTS ENDPOINTS
// ============================================

/**
 * Book Appointment
 * POST /api/appointments
 */
app.post('/api/appointments', (req, res) => {
    const { userId, doctorId, date, time, reason } = req.body;

    // Validation
    if (!userId || !doctorId || !date || !time) {
        return res.status(400).json({ success: false, message: 'Missing required fields' });
    }

    db.run(
        `INSERT INTO appointments (userId, doctorId, date, time, reason, status) 
         VALUES (?, ?, ?, ?, ?, 'confirmed')`,
        [userId, doctorId, date, time, reason || null],
        function(err) {
            if (err) {
                return res.status(500).json({ success: false, message: 'Database error' });
            }

            return res.status(201).json({
                success: true,
                message: 'Appointment booked successfully',
                appointmentId: this.lastID
            });
        }
    );
});

/**
 * Get User Appointments
 * GET /api/appointments/user/:userId
 */
app.get('/api/appointments/user/:userId', (req, res) => {
    const { userId } = req.params;

    db.all(
        `SELECT a.*, d.name, d.specialty, d.avatar 
         FROM appointments a 
         JOIN doctors d ON a.doctorId = d.id 
         WHERE a.userId = ? 
         ORDER BY a.date DESC`,
        [userId],
        (err, rows) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Database error' });
            }

            return res.json({ success: true, appointments: rows || [] });
        }
    );
});

/**
 * Get All Appointments
 * GET /api/appointments
 */
app.get('/api/appointments', (req, res) => {
    db.all(
        `SELECT a.*, u.name as userName, u.email, d.name as doctorName, d.specialty 
         FROM appointments a 
         JOIN users u ON a.userId = u.id 
         JOIN doctors d ON a.doctorId = d.id 
         ORDER BY a.date DESC`,
        (err, rows) => {
            if (err) {
                return res.status(500).json({ success: false, message: 'Database error' });
            }

            return res.json({ success: true, appointments: rows || [] });
        }
    );
});

/**
 * Cancel Appointment
 * DELETE /api/appointments/:id
 */
app.delete('/api/appointments/:id', (req, res) => {
    const { id } = req.params;

    db.run(
        `DELETE FROM appointments WHERE id = ?`,
        [id],
        function(err) {
            if (err) {
                return res.status(500).json({ success: false, message: 'Database error' });
            }

            if (this.changes === 0) {
                return res.status(404).json({ success: false, message: 'Appointment not found' });
            }

            return res.json({ success: true, message: 'Appointment cancelled successfully' });
        }
    );
});

/**
 * Reschedule Appointment
 * PUT /api/appointments/:id
 */
app.put('/api/appointments/:id', (req, res) => {
    const { id } = req.params;
    const { date, time } = req.body;

    if (!date || !time) {
        return res.status(400).json({ success: false, message: 'Date and time required' });
    }

    db.run(
        `UPDATE appointments SET date = ?, time = ? WHERE id = ?`,
        [date, time, id],
        function(err) {
            if (err) {
                return res.status(500).json({ success: false, message: 'Database error' });
            }

            if (this.changes === 0) {
                return res.status(404).json({ success: false, message: 'Appointment not found' });
            }

            return res.json({ success: true, message: 'Appointment rescheduled successfully' });
        }
    );
});

// ============================================
// HEALTH CHECK
// ============================================

app.get('/api/health', (req, res) => {
    res.json({ success: true, message: 'Server is running', timestamp: new Date().toISOString() });
});

// ============================================
// START SERVER
// ============================================

app.listen(PORT, () => {
    console.log(`\n🚀 Server running on http://localhost:${PORT}`);
    console.log(`📡 API Base URL: http://localhost:${PORT}/api`);
    console.log(`\n📚 Available Endpoints:`);
    console.log(`   POST   /api/auth/signup`);
    console.log(`   POST   /api/auth/login`);
    console.log(`   GET    /api/doctors`);
    console.log(`   GET    /api/doctors/:id`);
    console.log(`   POST   /api/appointments`);
    console.log(`   GET    /api/appointments/user/:userId`);
    console.log(`   GET    /api/appointments`);
    console.log(`   DELETE /api/appointments/:id`);
    console.log(`   PUT    /api/appointments/:id`);
    console.log(`   GET    /api/health\n`);
});

module.exports = app;
