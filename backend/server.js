/**
 * Ali Albaqqal Portfolio - Backend Entry Point
 * This file initializes the Express server, applies global middlewares, 
 * connects to the database, and registers API routes.
 */

const express = require('express');
const cors = require('cors');
require('dotenv').config(); // Loads variables from .env into process.env

// Import my custom database utility
const db = require('./src/config/db');

// Initialize Express app
const app = express();


// 1. Global Middlewares
app.use(cors()); // Enable CORS for all routes
app.use(express.json()); // Parse JSON bodies


// 2. System Health & Database Connectivity - A simple endpoint to check if the server is running and can connect to the database
app.get('/api/health', async (req, res) => {
    try { // If this succeeds, it proves our connection to Neon is active.

        // We run a simple SQL query to get the current time from Postgres.
        const result = await db.query('SELECT NOW()');

        res.status(200).json({
            status: 'success',
            message: 'Ali Albaqqal Portfolio API is running..',
            db_time: result.rows[0].now
        })
        
    } catch (error) {
        res.status(500).json({ 
            status: 'error',
            message: 'API is active, but the database connection failed.',
            error: error.message
        });
    }
});


// 3. Route Registration
app.use('/api/projects', require('./src/routes/projectRoutes')) // Projects API
app.use('/api/skills', require('./src/routes/skillRoutes')) // Skills API
app.use('/api/experiences', require('./src/routes/experienceRoutes')) // Experiences API
app.use('/api/educations', require('./src/routes/educationRoutes')) // Educations API
app.use('/api/awards', require('./src/routes/awardRoutes')) // Awards API


// 4. Not Found (404) Handler - This will catch any requests to undefined routes and return a 404 error.
app.use((req, res) => {
    res.status(404).json({
        status: 'error',
        message: `Route ${req.originalUrl} not found`
    })
});


// 5. Global Error Handler - This will catch any errors thrown in the route handlers and return a 500 error.
app.use((err, req, res, next) => {
    
    console.error('Backend Error: ', err.stack); // Log the stack trace for the developer in the terminal

    res.status(err.status || 500).json({
    status: 'error',
    message: 'An unexpected internal server error occurred.',
    error: err.message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack // Only show the technical stack trace if we aren't in production
    });
});


// 6. Server Startup
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`\n===============================================`);
    console.log(`🚀 Server listening on port ${PORT}`);
    console.log(`🔗 Local URL: http://localhost:${PORT}`);
    console.log(`🫀  Health:    http://localhost:${PORT}/api/health`);
    console.log(`===============================================\n`);
});