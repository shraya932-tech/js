const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());

// Endpoint to serve HTML file using res.sendFile()
app.get('/api/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'products.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});