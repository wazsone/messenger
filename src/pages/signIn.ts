import { getSignInData } from "../data/centeredForm.js";
import CenteredForm from "../components/CenteredForm/index.js";
import { renderDOM } from "../utils/renderUtils.js";

const signInData = getSignInData();
const form = new CenteredForm(signInData);

renderDOM(".main", form);
