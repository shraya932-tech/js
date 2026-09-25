const express = require('express');
const app = express();
const PORT = 4000;

// Custom Logging Middleware
app.use((req, res, next) => {
    console.log(`${req.method} request made to ${req.url}`);
    next();
});

// 1. GET /products
app.get('/products', (req, res) => {
    res.send("Here is the list of all products.");
});

// 2. POST /products
app.post('/products', (req, res) => {
    res.send("A new product has been added.");
});

// 3. GET /categories
app.get('/categories', (req, res) => {
    res.send("Here is the list of all categories.");
});

// 4. POST /categories
app.post('/categories', (req, res) => {
    res.send("A new category has been created.");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});