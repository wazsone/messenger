"use strict";
import path from "path";
import { handle404Error, handle500Error } from "./modules/pages/errors.mjs";
import { handleSignIn, handleSignUp } from "./modules/pages/centeredForm.mjs";
import { handleUserSettings } from "./modules/pages/userSettings.mjs";
import { handleChatList } from "./modules/pages/chatList.mjs";
import exphbs from "express-handlebars";
import express from "express";
const app = express();

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("views", "./views");
app.set("view engine", "handlebars");

const __dirname = path.resolve();
app.use(express.static(path.join(__dirname, "/public")));

app.get("/", (_, res) => {
    res.render("hello", {
        title: "Hello!",
        greeting: "Hello, my comrade!",
        layout: "hello",
    });
});

app.get("/404", handle404Error);

app.get("/500", handle500Error);

app.get("/sign-in", handleSignIn);

app.get("/sign-up", handleSignUp);

app.get("/user-settings", handleUserSettings);

app.get("/chat-list", handleChatList);

const PORT = 4000;
app.listen(PORT, function () {
    console.log(`Messenger is listening on port ${PORT}!`);
});
