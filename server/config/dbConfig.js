require("dotenv").config(); // Load environment variables
const mongoose = require("mongoose");

// Use MongoDB URL from .env or default to local database
const MONGO_URI = process.env.MONGO_URI || "mongodb://127.0.0.1:27017/clothPro";

// Connect to MongoDB
mongoose.connect(MONGO_URI, {
    // useNewUrlParser: true,
    // useUnifiedTopology: true,
})
.then(() => console.log("✅ Connected to MongoDB."))
.catch(error => console.error("❌ Failed to connect to MongoDB: " + error));

module.exports = mongoose;
