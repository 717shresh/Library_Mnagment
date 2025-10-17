import pkg from "pg";
import dotenv from "dotenv";
import dns from "dns";

dotenv.config();

// Force Node to prefer IPv4 addresses first
dns.setDefaultResultOrder("ipv4first");

const { Pool } = pkg;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { rejectUnauthorized: false },
});

export default pool;
