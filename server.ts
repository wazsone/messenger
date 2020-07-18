import path from "path";
import express from "express";

const app = express();
const dirname = path.resolve();

app.use(express.static(path.join(dirname, "/static")));

const PORT = 4000;
app.listen(PORT, function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});