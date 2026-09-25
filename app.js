const express = require('express');
const app = express();
const PORT = 3000;

// Custom Middleware Function
const addUserMiddleware = (req, res, next) => {
    req.user = "Guest";
    next();
};

// Route using the middleware
app.get('/welcome', addUserMiddleware, (req, res) => {
    res.send(`<h1>Welcome, ${req.user}!</h1>`);
});

app.listen(PORT, () => {
    console.log(`Server is up and running on port ${PORT}! Ready to handle requests.`);
});