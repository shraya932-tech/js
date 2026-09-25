const express = require('express');
const app = express();
const PORT = 3000;

const userRoutes = require('./routes/userRoutes');
const productRoutes = require('./routes/productRoutes');
const cartRoutes = require('./routes/cartRoutes');

app.use(express.json());

// Mount routers
app.use('/users', userRoutes);
app.use('/products', productRoutes);
app.use('/cart', cartRoutes);

// Start server
app.listen(PORT, () => {
    console.log(`E-Commerce API server running on http://localhost:${PORT}`);
});