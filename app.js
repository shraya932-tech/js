const express = require('express');
const app = express();
const PORT = 3000;

// Middleware to parse incoming JSON requests
app.use(express.json());

// Import router module
const bookRoutes = require('./routes/bookRoutes');

// Mount router
app.use('/', bookRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});