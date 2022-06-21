const express = require("express");

const webhooks = [];

const app = express();

app.post("/hangfire", (req, res) => {
    webhooks.push({url: req.originalUrl, body: req.body})
    res.send("Express on Vercel");
});

app.get("/hangfire", (req, res) => {
    res.json(webhooks);
})

app.listen(5000, () => {
    console.log("Running on port 5000.");
});

// Export the Express API
module.exports = app;