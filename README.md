# API Server with Rate Limiting and CORS Protection

This server provides rate limiting and CORS protection for the covidindiahelp-web application's API endpoints.

## Features

- **Rate Limiting**: Prevents abuse by limiting the number of requests from a single IP address
  - Global rate limit: 100 requests per 15 minutes (configurable)
  - API-specific rate limit: 50 requests per 5 minutes (configurable)
- **CORS Protection**: Controls which domains can access the API
- **Security Headers**: Implements security best practices using Helmet

## Setup

1. Install dependencies:
   ```
   npm install
   ```

2. Configure environment variables by creating a `.env` file:
   ```
   # Server configuration
   PORT=5000

   # CORS configuration
   # Comma-separated list of allowed origins (leave empty to allow all origins)
   ALLOWED_ORIGINS=http://localhost:3000,https://missionhumane.org

   # Rate limiting configuration
   # Global rate limit (requests per 15 minutes)
   GLOBAL_RATE_LIMIT=100
   # API rate limit (requests per 5 minutes)
   API_RATE_LIMIT=50
   ```

3. Start the server:
   ```
   npm start
   ```

   For development with auto-restart:
   ```
   npm run dev
   ```

## API Endpoints

- `GET /api/test`: Test endpoint to verify the API is working

## Customizing Rate Limits

You can customize the rate limits by modifying the `.env` file:

- `GLOBAL_RATE_LIMIT`: Maximum number of requests allowed per IP address in a 15-minute window
- `API_RATE_LIMIT`: Maximum number of API requests allowed per IP address in a 5-minute window

## Customizing CORS

To control which domains can access your API, set the `ALLOWED_ORIGINS` environment variable to a comma-separated list of allowed origins. For example:

```
ALLOWED_ORIGINS=http://localhost:3000,https://missionhumane.org
```

To allow all origins, leave it empty or set it to `*`.
