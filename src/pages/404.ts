import { renderDOM } from "../utils/renderUtils.js";
import Error from "../components/Error/index.js";
import { getData } from "../data/errors.js";

const errorData = getData("404");
const error = new Error(errorData);

renderDOM(".main", error);
