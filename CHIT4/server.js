const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(bodyParser.json());

// Array to store registered users
const registeredUsers = [];

// Route to handle user registration
app.post("/register", (req, res) => {
    const { name, email } = req.body;
    if (!name || !email) {
        return res.status(400).send("Name and email are required");
    }
    // Push user data to the array
    registeredUsers.push({ name, email });
    console.log("New user registered:", { name, email });
    res.sendStatus(200);
});

// Route to display list of registered users
app.get("/users", (req, res) => {
    res.send(`
        <h2>List of Registered Users</h2>
        <ul>
            ${registeredUsers.map(user => `<li>${user.name} - ${user.email}</li>`).join("")}
        </ul>
    `);
});

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve index.html for the root URL ('/')
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
