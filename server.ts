const path = require("path");
const express = require("express");

const app = express();
const dirname = path.resolve();

app.use(express.static(path.join(dirname, "/dist")));

const PORT = process.env.PORT || 4000;
app.listen(PORT, "0.0.0.0", function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});
