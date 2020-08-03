import { getSignUpData } from "../data/centeredForm";
import { CenteredForm } from "../components/CenteredForm/index";
import { renderDOM } from "../utils/renderUtils";

const signUpData = getSignUpData();
const form = new CenteredForm(signUpData);

renderDOM(".main", form);
