import { Router } from "../routing/Router";
import { getData as getErrorData } from "../data/errors";
import { getSignInData, getSignUpData } from "../data/centeredForm";
import { getData as getUserSettingsData } from "../data/userSettings";
import { getData as getChatScreenData } from "../data/chatScreen";
import { IndexPage } from "../components/IndexPage/index";
import { Error, IProps as IErrorProps } from "../components/Error/index";
import { CenteredForm, IProps as ICenteredFormProps } from "../components/CenteredForm/index";
import { UserSettings, IProps as IUserSettingsProps } from "../components/UserSettings/index";
import { ChatScreen, IProps as IChatScreenProps } from "../components/ChatScreen/index";
import { renderDOM, handleLinkClick } from "../utils/renderUtils";
import { Block } from "../modules/block";
import * as Handlebars from "handlebars";

import "../scss/common.scss";
import "../scss/styles.scss";

window.Handlebars = Handlebars;

const pages: Block<any>[] = [
    new IndexPage({}),
    new Error(getErrorData("404")),
    new Error(getErrorData("500")),
    new CenteredForm(getSignInData()),
    new CenteredForm(getSignUpData()),
    new UserSettings(getUserSettingsData()),
    new ChatScreen(getChatScreenData()),
];

pages.forEach((page) => renderDOM(".app", page));

const router = Router.getInstance();
router
    .use<{}>("/", pages[0])
    .use<IErrorProps>("/error/404", pages[1])
    .use<IErrorProps>("/error/500", pages[2])
    .use<ICenteredFormProps>("/sign-in", pages[3])
    .use<ICenteredFormProps>("/sign-up", pages[4])
    .use<IUserSettingsProps>("/user-settings", pages[5])
    .use<IChatScreenProps>("/chat-screen", pages[6])
    .start();

const links = document.querySelectorAll("a") ?? [];
for (const link of links) {
    link.onclick = handleLinkClick;
}
