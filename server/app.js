const express = require("express");
const app = express();
const server = require("http").createServer(app);

// Middleware
app.use(express.json()); // ✅ Required for parsing JSON data

// Import authentication routes
const authRouter = require("./controllers/authController");
app.use("/api/auth", authRouter);

// Test Route
app.get("/", (req, res) => {
    res.send("Server is running! 🚀");
});

module.exports = server;
