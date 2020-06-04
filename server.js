const express = require("express");
const fs = require("fs");

const app = express();
const PORT = 4000;

app.get("/", (_req, res) => {
    const page = fs.readFileSync("index.html", "utf8");
    res.status(200).send(page);
});

app.listen(PORT, function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});
