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

const router = new Router(".app");

router
    .use<{}>("/", () => new IndexPage({}))
    .use<IErrorProps>("/error/404", () => new Error(getErrorData("404")))
    .use<IErrorProps>("/error/500", () => new Error(getErrorData("500")))
    .use<ICenteredFormProps>("/sign-in", () => new CenteredForm(getSignInData()))
    .use<ICenteredFormProps>("/sign-up", () => new CenteredForm(getSignUpData()))
    .use<IUserSettingsProps>("/user-settings", () => new UserSettings(getUserSettingsData()))
    .use<IChatScreenProps>("/chat-screen", () => new ChatScreen(getChatScreenData()))
    .start();

for (const link of document.getElementsByTagName("a")) {
    link.onclick = (e: any) => {
        console.log(e.target.href);
        console.log(e.target.baseURI.length);
        const route = e.target.href.substring(e.target.baseURI.length - 1);
        console.log(route);
        router.go(route);
        e.preventDefault();
    }
}
