const express = require('express');
const app = express();

const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Sample API Endpoint
app.get('/', (req, res) => {
    res.send('This is for CI/CD Pipeline to deploy Node.js app');
});

// Start Server
app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://0.0.0.0:${PORT}`);
});