const healthCheck = (req, res) => {
    res.json({
        status: "OK",
        message: "Uptime Monitoring API is running"
    });
};

module.exports = {
    healthCheck
};
