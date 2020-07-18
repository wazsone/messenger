import { Router } from "../routing/Router.js";
import { getData as getErrorData } from "../data/errors.js";
import { getSignInData, getSignUpData } from "../data/centeredForm.js";
import { getData as getUserSettingsData } from "../data/userSettings.js";
import { getData as getChatScreenData } from "../data/chatScreen.js";
import { IndexPage } from "../components/IndexPage/index.js";
import { Error, IProps as IErrorProps } from "../components/Error/index.js";
import { CenteredForm, IProps as ICenteredFormProps } from "../components/CenteredForm/index.js";
import { UserSettings, IProps as IUserSettingsProps } from "../components/UserSettings/index.js";
import { ChatScreen, IProps as IChatScreenProps } from "../components/ChatScreen/index.js";
import { renderDOM } from "../utils/renderUtils.js";
import { Block } from "../modules/block.js";

const pages: Block<any>[] = [
    new IndexPage({}),
    new Error(getErrorData("404")),
    new Error(getErrorData("500")),
    new CenteredForm(getSignInData()),
    new CenteredForm(getSignUpData()),
    new UserSettings(getUserSettingsData()),
    new ChatScreen(getChatScreenData()),
];

pages.forEach(page => renderDOM(".app", page));

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

const pagesLinks = document.getElementById("pages-links")?.querySelectorAll("a") ?? [];
for (const link of pagesLinks) {
    link.onclick = (e: any) => {
        console.log(e.target.href);
        console.log(e.target.baseURI.length);
        const route = e.target.href.substring(e.target.baseURI.length - 1);
        console.log(route);
        router.go(route);
        e.preventDefault();
    }
}
