const express = require('express');
const app = express();
const PORT = 3000;

// Import router module
const productRoutes = require('./routes/productRoutes');

// Mount router
app.use('/', productRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});