const express = require("express");
const app = express();
const expressHandlebars = require("express-handlebars");
const path = require("path");

app.engine("handlebars", expressHandlebars({ defaultLayout: "main" }));
app.set("views", "./views");
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, '/public')));
app.get("/", (_, res) => {
    res.render("hello", {
        title: "Hello!",
        greeting: "Hello, my comrade!",
        layout: "hello"
    });
});

app.get("/404", (_, res) => {
    res.render("pages/error", {
        title: "404",
        errorCode: "404",
        errorMessage: "Wrong hit"
    });
});

app.get("/500", (_, res) => {
    res.render("pages/error", {
        title: "500",
        errorCode: "500",
        errorMessage: "Wrong hit"
    });
});

const PORT = 4000;
app.listen(PORT, function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});
