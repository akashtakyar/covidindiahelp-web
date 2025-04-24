const express = require('express');
const cors = require('cors');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
const path = require('path');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

// Security headers with Helmet
app.use(helmet());

// CORS configuration
const corsOptions = {
  origin: process.env.ALLOWED_ORIGINS ? process.env.ALLOWED_ORIGINS.split(',') : '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
  maxAge: 86400 // 24 hours
};

app.use(cors(corsOptions));

// Global rate limiter
const globalLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: process.env.GLOBAL_RATE_LIMIT || 100, // limit each IP to 100 requests per windowMs
  standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
  legacyHeaders: false, // Disable the `X-RateLimit-*` headers
  message: {
    success: false,
    message: 'Too many requests, please try again later.',
    responseCode: 429
  }
});

// Apply the global rate limiter to all requests
app.use(globalLimiter);

// API-specific rate limiter (more strict)
const apiLimiter = rateLimit({
  windowMs: 5 * 60 * 1000, // 5 minutes
  max: process.env.API_RATE_LIMIT || 50, // limit each IP to 50 requests per windowMs
  standardHeaders: true,
  legacyHeaders: false,
  message: {
    success: false,
    message: 'Too many API requests, please try again later.',
    responseCode: 429
  }
});

// Apply the API rate limiter to API routes
app.use('/api/', apiLimiter);

// Parse JSON request body
app.use(express.json());

// Serve static files from the React app
app.use(express.static('build'));

// Example API endpoint
app.get('/api/test', (req, res) => {
  res.json({
    success: true,
    message: 'API is working!',
    responseCode: 200
  });
});

// Handle all other requests by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
