import { getSignInData } from "../data/centeredForm";
import { CenteredForm } from "../components/CenteredForm/index";
import { renderDOM } from "../utils/renderUtils";

const signInData = getSignInData();
const form = new CenteredForm(signInData);

renderDOM(".main", form);
