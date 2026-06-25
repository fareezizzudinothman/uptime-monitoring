const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "uptime_monitor",
  user: "postgres",
  password: "postgres123",
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
