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
    res.render("error", {
        title: "404",
        errorCode: "404",
        errorMessage: "Wrong hit"
    });
});

app.get("/500", (_, res) => {
    res.render("error", {
        title: "500",
        errorCode: "500",
        errorMessage: "Wrong hit"
    });
});

app.get("/sign-in", (_, res) => {
    res.render("centered-form", {
        title: "Sign In",
        placeholders: ["Login", "Password"],
        errorMessage: "Wrong login/password",
        confirmBtnName: "Sign In",
        linkTitle: "Don't have an account?",
        link: ""
    });
});

app.get("/sign-up", (_, res) => {
    res.render("centered-form", {
        title: "Sign Up",
        placeholders: ["E-mail", "Login", "Password", "Password (again)"],
        errorMessage: "Passwords are not equal",
        confirmBtnName: "Sign Up",
        linkTitle: "Sign In",
        link: ""
    });
});

app.get("/user-settings", (_, res) => {
    res.render("user-settings", {
        title: "User settings",
        inputs:[ 
            {
                placeholder: "Full name",
                errorMessage: "Illigal symbols"
            },
            {
                placeholder: "Login",
                errorMessage: "Illigal symbols"
            },
            {
                placeholder: "E-mail",
                errorMessage: "Wrong e-mail format"
            },
            {
                placeholder: "Old password",
                errorMessage: "Wrong password",            },
            {
                placeholder: "New password",
                errorMessage: "Hidden block",
                className: "hidden"
            },
            {
                placeholder: "New password (again)",
                errorMessage: "Passwords are not equal"
            },

        ],
        confirmBtnName: "Change settings"
    });
});

const PORT = 4000;
app.listen(PORT, function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});
