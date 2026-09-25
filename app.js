const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// GET endpoint serving the HTML form
app.get('/api/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'productForm.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});