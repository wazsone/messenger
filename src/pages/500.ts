import { renderDOM } from "../utils/renderUtils";
import { Error } from "../components/Error/index";
import { getData } from "../data/errors";

const errorData = getData("500");
const error = new Error(errorData);

renderDOM(".main", error);
