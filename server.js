const express = require("express");
const path = require('path');

const app = express();
const PORT = 4000;

app.get('/', (_req, res) => res.sendFile(path.join(__dirname, '/index.html')));

app.listen(PORT, function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});
