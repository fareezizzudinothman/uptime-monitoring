require("dotenv").config();

const { Pool } = require("pg");

const pool = new Pool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// Test database connection
pool.connect()
  .then(client => {
    console.log("✅ Connected to PostgreSQL Database");

    client.release();
  })
  .catch(err => {
    console.error("❌ Failed to connect to PostgreSQL");
    console.error(err.message);
  });

module.exports = pool;
