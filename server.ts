const path = require("path");
const express = require("express");

const app = express();
const _dirname = path.resolve();

app.use(express.static(path.join(_dirname, "/static")));
app.use(express.static(path.join(_dirname, "/out/static/css")));
app.use(express.static(path.join(_dirname, "/out/static/pages")));
app.use(express.static(path.join(_dirname, "/out/static/index.html")));

const PORT = 4000;
app.listen(PORT, function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});