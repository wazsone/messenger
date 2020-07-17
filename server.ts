import path from "path";
import express from "express";

const app = express();
const _dirname = path.resolve();

app.use(express.static(path.join(_dirname, "/static")));

const PORT = 4000;
app.listen(PORT, function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});