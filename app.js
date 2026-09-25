const express = require('express');
const app = express();
const PORT = 3000;

// Dynamic GET route using route parameters and query parameters
app.get('/welcome/:username', (req, res) => {
    const { username } = req.params;
    const { role } = req.query;

    if (role) {
        res.send(`Welcome ${username}, your role is ${role}`);
    } else {
        res.send(`Welcome ${username}`);
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});