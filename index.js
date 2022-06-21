const express = require("express");

let webhooks = [];

const app = express();

app.use(express.json());

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

app.delete("/hangfire", (req, res) => {
    webhooks = [];
    res.json(webhooks);
})

app.listen(process.env.PORT, () => {
    console.log(`Running on port ${process.env.PORT}.`);
});

// Export the Express API
module.exports = app;