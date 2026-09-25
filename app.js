const express = require('express');
const app = express();
const PORT = 3000;

// 1. GET /orders
app.get('/orders', (req, res) => {
    res.send("Here is the list of all orders.");
});

// 2. POST /orders
app.post('/orders', (req, res) => {
    res.send("A new order has been created.");
});

// 3. GET /users
app.get('/users', (req, res) => {
    res.send("Here is the list of all users.");
});

// 4. POST /users
app.post('/users', (req, res) => {
    res.send("A new user has been added.");
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});