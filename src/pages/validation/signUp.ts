import { authAPIInstance } from "../../api/api-instances";

let SignUpInputs: NodeListOf<HTMLInputElement>;
let SignUpErrorLabel: HTMLLabelElement;

interface IUserSettings {
    first_name: string;
    second_name: string;
    phone: string;
    email: string;
    login: string;
    password: string;
    passwordAgain: string;
}

function validate() {
    console.log("validate()");
    const userSettings: IUserSettings = {
        first_name: "",
        second_name: "",
        phone: "",
        email: "",
        login: "",
        password: "",
        passwordAgain: "",
    };
    for (let i = 0; i < SignUpInputs.length; i++) {
        const attr = SignUpInputs[i].getAttribute("name");
        if (attr && Object.keys(userSettings).includes(attr)) {
            userSettings[attr] = SignUpInputs[i].value;
        }
    }
    console.log("validate.userSettings:");
    console.log(userSettings);
    let hasEmptyInput = false;
    for (const key in userSettings) {
        if (userSettings[key] && userSettings[key] === "") {
            hasEmptyInput = true;
            break;
        }
    }

    if (!hasEmptyInput && userSettings.password === userSettings.passwordAgain) {
        console.log("validate, Success!");
        if (!SignUpErrorLabel.classList.contains("hidden")) {
            SignUpErrorLabel.classList.add("hidden");
        }
        delete userSettings.passwordAgain;
        console.log(userSettings as Omit<IUserSettings, "passwordAgain">);
        authAPIInstance
            .post("/signup", {
                data: userSettings,
            })
            .then((res: XMLHttpRequest) => {
                console.log(res.response);
            })
            .catch((e) => {
                console.log("error: ", e);
            });
        return;
    }

    console.log("validate, Failed!");
    SignUpErrorLabel.classList.remove("hidden");
}

export function initSignUpValidation(className: string) {
    console.log("validationSignUp.init");
    SignUpErrorLabel = document.getElementById(`${className}error-label`) as HTMLLabelElement;
    const signUpForm = document.getElementsByClassName(className)[0];
    SignUpInputs = signUpForm?.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
    if (!SignUpInputs) {
        return;
    }
    for (let i = 0; i < SignUpInputs.length; i++) {
        SignUpInputs[i].onblur = () => {
            console.log(`${SignUpInputs[i].name}.onblur()`);
            if (SignUpInputs[i].value === "") {
                SignUpInputs[i].classList.add("invalid");
            }
        };
        SignUpInputs[i].onfocus = () => {
            console.log(`${SignUpInputs[i].name}.onfocus()`);
            if (SignUpInputs[i].classList.contains("invalid")) {
                SignUpInputs[i].classList.remove("invalid");
            }
        };
    }

    document.getElementById(`${className}confirm-button`)?.addEventListener("click", validate);
}
