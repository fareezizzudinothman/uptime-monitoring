const express = require("express");

const healthRoutes = require("./src/routes/health.routes")

const app = express();

const PORT = 3000;

app.get("/", (req, res) => {
    res.send("🚀 Uptime Monitoring API is running!");
});

app.use("/api", healthRoutes);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});
