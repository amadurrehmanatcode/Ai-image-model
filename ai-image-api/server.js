const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables

const app = express();

app.use(cors());
app.use(express.json());

// Import Routes
const uploadRoutes = require("./routes/upload");
app.use("/api", uploadRoutes);

// Start the Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
