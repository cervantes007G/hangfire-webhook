const express = require("express");

const webhooks = [];

const app = express();

app.get("", (req, res) => {
    res.send("Hello World");
});

app.post("/hangfire", (req, res) => {
    webhooks.push({url: req.originalUrl, body: req.body})
    res.send("Express on Vercel");
});

app.get("/hangfire", (req, res) => {
    res.json(webhooks);
})

app.listen(process.env.PORT, () => {
    console.log("Running on port 4000.");
});

// Export the Express API
module.exports = app;