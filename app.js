const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

// Middleware to parse JSON bodies and URL-encoded data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve HTML form
app.get('/api/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'productForm.html'));
});

// Handle POST request from Axios / Postman
app.post('/api/products', (req, res) => {
    const productData = req.body;
    
    // Console log the data on the server
    console.log('Received Product Data:', productData);

    // Return the user-added product as a response
    res.status(201).json({
        message: 'Product added successfully',
        product: productData
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});