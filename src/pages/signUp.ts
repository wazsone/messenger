import { getSignUpData } from "../data/centeredForm.js";
import CenteredForm from "../components/CenteredForm/index.js";
import { renderDOM } from "../utils/renderUtils.js";

const signUpData = getSignUpData();
const form = new CenteredForm(signUpData);

renderDOM(".main", form);
