const { Pool } = require("pg");

const pool = new Pool({
  host: "localhost",
  port: 5432,
  database: "uptime_monitor",
  user: "postgres",
  password: "postgres123",
});

module.exports = pool;
