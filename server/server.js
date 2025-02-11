require("dotenv").config(); // Load environment variables
let server = require("./app"); // Import Express app

const port = process.env.PORT_NUMBER || 5000;

server.listen(port, () => {
    console.log(`🚀 Server is running on http://localhost:${port}`);
});
