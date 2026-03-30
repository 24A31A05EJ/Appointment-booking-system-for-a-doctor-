const sqlite3 = require('sqlite3').verbose();
const path = require('path');

// Create or connect to database
const dbPath = path.join(__dirname, 'medicare.db');
const db = new sqlite3.Database(dbPath, (err) => {
    if (err) {
        console.error('Error opening database:', err.message);
    } else {
        console.log('Connected to SQLite database at:', dbPath);
        initializeDatabase();
    }
});

// Initialize database tables
function initializeDatabase() {
    // Users table
    db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT UNIQUE NOT NULL,
            password TEXT NOT NULL,
            userType TEXT DEFAULT 'patient',
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) console.error('Error creating users table:', err.message);
        else console.log('✓ Users table ready');
    });

    // Doctors table
    db.run(`
        CREATE TABLE IF NOT EXISTS doctors (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            specialty TEXT NOT NULL,
            avatar TEXT,
            availableDates TEXT,
            availableTimes TEXT,
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP
        )
    `, (err) => {
        if (err) console.error('Error creating doctors table:', err.message);
        else console.log('✓ Doctors table ready');
    });

    // Appointments table
    db.run(`
        CREATE TABLE IF NOT EXISTS appointments (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            userId INTEGER NOT NULL,
            doctorId INTEGER NOT NULL,
            date TEXT NOT NULL,
            time TEXT NOT NULL,
            reason TEXT,
            status TEXT DEFAULT 'confirmed',
            createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
            FOREIGN KEY (userId) REFERENCES users(id),
            FOREIGN KEY (doctorId) REFERENCES doctors(id)
        )
    `, (err) => {
        if (err) console.error('Error creating appointments table:', err.message);
        else console.log('✓ Appointments table ready');
    });

    // Populate sample doctors if not already present
    populateSampleDoctors();
}

// Populate sample doctors
function populateSampleDoctors() {
    const sampleDoctors = [
        {
            name: 'Dr. Siddendra Sharma',
            specialty: 'Cardiology',
            avatar: '👨‍⚕️',
            availableDates: JSON.stringify(['2026-03-20', '2026-03-21', '2026-03-22', '2026-03-23', '2026-03-24', '2026-03-25', '2026-03-26']),
            availableTimes: JSON.stringify(['09:00 AM', '10:00 AM', '02:00 PM', '04:00 PM'])
        },
        {
            name: 'Dr. Michael Chen',
            specialty: 'Cardiology',
            avatar: '👨‍⚕️',
            availableDates: JSON.stringify(['2026-03-20', '2026-03-21', '2026-03-22', '2026-03-24', '2026-03-25']),
            availableTimes: JSON.stringify(['08:00 AM', '11:00 AM', '01:00 PM', '03:30 PM'])
        },
        {
            name: 'Dr. Sarah Mitchell',
            specialty: 'Cardiology',
            avatar: '👩‍⚕️',
            availableDates: JSON.stringify(['2026-03-20', '2026-03-22', '2026-03-23', '2026-03-25', '2026-03-26']),
            availableTimes: JSON.stringify(['10:30 AM', '12:00 PM', '02:30 PM', '05:00 PM'])
        },
        {
            name: 'Dr. Vinesh Patel',
            specialty: 'Dermatology',
            avatar: '👨‍⚕️',
            availableDates: JSON.stringify(['2026-03-20', '2026-03-22', '2026-03-23', '2026-03-24', '2026-03-26']),
            availableTimes: JSON.stringify(['10:00 AM', '11:00 AM', '03:00 PM', '05:00 PM'])
        },
        {
            name: 'Dr. Emily Rodriguez',
            specialty: 'Dermatology',
            avatar: '👩‍⚕️',
            availableDates: JSON.stringify(['2026-03-20', '2026-03-21', '2026-03-23', '2026-03-25', '2026-03-27']),
            availableTimes: JSON.stringify(['09:00 AM', '11:30 AM', '02:00 PM', '04:00 PM'])
        },
        {
            name: 'Dr. Robert Taylor',
            specialty: 'General Practice',
            avatar: '👨‍⚕️',
            availableDates: JSON.stringify(['2026-03-20', '2026-03-21', '2026-03-22', '2026-03-23', '2026-03-24', '2026-03-25']),
            availableTimes: JSON.stringify(['08:00 AM', '09:00 AM', '10:00 AM', '01:00 PM', '02:00 PM', '03:00 PM'])
        }
    ];

    db.get('SELECT COUNT(*) as count FROM doctors', (err, row) => {
        if (err) {
            console.error('Error checking doctors:', err.message);
            return;
        }
        
        if (row.count === 0) {
            sampleDoctors.forEach(doctor => {
                db.run(
                    `INSERT INTO doctors (name, specialty, avatar, availableDates, availableTimes) 
                     VALUES (?, ?, ?, ?, ?)`,
                    [doctor.name, doctor.specialty, doctor.avatar, doctor.availableDates, doctor.availableTimes],
                    (err) => {
                        if (err) console.error('Error inserting doctor:', err.message);
                    }
                );
            });
            console.log('✓ Sample doctors populated');
        }
    });
}

module.exports = db;
