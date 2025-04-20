const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const medicineRoutes = require("./routes/medicineRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

const app = express();

// ✅ Enable CORS for frontend (Vite dev server)
app.use(cors({
  origin: "http://localhost:5173", // replace with frontend origin
  credentials: true
}));

// Parse JSON bodies
app.use(express.json());

// API Routes
app.use("/api/users", userRoutes);
app.use("/api/medicines", medicineRoutes);

// Optional root route
app.get("/", (req, res) => {
  res.send("API is running...");
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
