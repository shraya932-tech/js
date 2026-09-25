// Handler for GET /products
exports.getAllProducts = (req, res) => {
    res.send("Fetching all products");
};

// Handler for GET /products/:id
exports.getProductById = (req, res) => {
    res.send(`Fetching product with ID: ${req.params.id}`);
};

// Handler for POST /products
exports.createProduct = (req, res) => {
    res.send("Adding a new product");
};