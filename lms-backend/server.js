import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import pool from "./db.js";

import authRoutes from "./routes/authRoutes.js";
import userRoutes from "./routes/userRoutes.js";
import sectionRoutes from "./routes/sectionRoutes.js";
import bookRoutes from "./routes/bookRoutes.js";
import issueRoutes from "./routes/issueRoutes.js";

dotenv.config();

const app = express();

// Middleware
app.use(cors());
app.use(express.json());  

// Routes
app.use("/api/auth", authRoutes);       // Register/Login
app.use("/api/users", userRoutes);      // Admin user management
app.use("/api/sections", sectionRoutes); // Sections (add/view)
app.use("/api/books", bookRoutes);      // Books (add/view)
app.use("/api/issues", issueRoutes);    // Issue/Return system

// Root route
app.get("/", (req, res) => {
  res.send("📚 Library Management System API is running 🚀");
});


app.get("/test-db", async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");
    res.json({ message: "✅ Database connected successfully!", time: result.rows[0].now });
  } catch (error) {
    console.error("❌ Database connection error:", error.message);
    res.status(500).json({ error: error.message });
  }
});


// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
