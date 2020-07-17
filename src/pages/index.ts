import Router from "../routing/Router.js";
import { getData as getErrorData } from "../data/errors.js";
import Error from "../components/Error/index.js";
import IndexPage from "../components/index.js";

const router = new Router(".app");

router
    .use("/", () => new IndexPage({}))
    .use("/error/404", () => new Error(getErrorData("404")))
    .use("/error/500", () => new Error(getErrorData("500")))
    .start();

router.go("/");