const express = require("express");
const path = require('path');

const app = express();
const PORT = 4000;

app.use(express.static('./static'))

app.listen(PORT, function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});
