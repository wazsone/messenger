const express = require("express");
const app = express();
const expressHandlebars = require("express-handlebars");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("views", "./views");
app.set("view engine", "handlebars");

app.get("/", (_, res) => {
    res.render("hello", { greeting: "Hello, my comrad!" });
});

const PORT = 4000;
app.listen(PORT, function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});
