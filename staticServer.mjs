import path from "path";
import express from "express";

const app = express();
const __dirname = path.resolve();

app.use(express.static(path.join(__dirname, "/static")));

const PORT = 4000;
app.listen(PORT, function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});