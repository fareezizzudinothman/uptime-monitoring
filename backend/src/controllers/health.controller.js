const pool = require("../config/database");

const checkDatabase = async (req, res) => {
  try {
    const result = await pool.query("SELECT NOW()");

    res.status(200).json({
      status: "OK",
      database: "Connected",
      serverTime: result.rows[0].now,
    });
  } catch (error) {
    res.status(500).json({
      status: "ERROR",
      database: "Disconnected",
      error: error.message,
    });
  }
};

module.exports = {
  checkDatabase,
};
