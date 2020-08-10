// import { registeredUsers } from "./testData";
import { authAPIInstance } from "../../api/api-instances";

export interface IUserLogin {
    login: string;
    password: string;
}

let SignInInputs: NodeListOf<HTMLInputElement>;
let SignInErrorLabel: HTMLLabelElement;

function validate() {
    console.log("validate()");
    const currentUser: IUserLogin = { login: "", password: "" };
    for (let i = 0; i < SignInInputs.length; i++) {
        const attr = SignInInputs[i].getAttribute("name");
        if (attr && Object.keys(currentUser).includes(attr)) {
            currentUser[attr] = SignInInputs[i].value;
        }
    }
    console.log("validate.currentUser:");
    console.log(currentUser);
    authAPIInstance
        .post("/signin", {
            data: currentUser,
        })
        .then((res: XMLHttpRequest) => {
            console.log(res.response);
            if (!SignInErrorLabel.classList.contains("hidden")) {
                SignInErrorLabel.classList.add("hidden");
            }
        })
        .catch((e) => {
            console.log("error: ", e);
            console.log("validate, Failed!");
            SignInErrorLabel.classList.remove("hidden");
        });
    // for (const user of registeredUsers) {
    //     if (user.login === currentUser.login && user.password === currentUser.password) {
    //         console.log("validate, Success!");
    //         if (!SignInErrorLabel.classList.contains("hidden")) {
    //             SignInErrorLabel.classList.add("hidden");
    //         }
    //         return;
    //     }
    // }
    // console.log("validate, Failed!");
    // SignInErrorLabel.classList.remove("hidden");
}

export function initSignInValidation(className: string) {
    console.log("validationSignIn.init");
    SignInErrorLabel = document.getElementById(`${className}error-label`) as HTMLLabelElement;
    const signInForm = document.getElementsByClassName(className)[0];
    SignInInputs = signInForm?.querySelectorAll("input") as NodeListOf<HTMLInputElement>;
    if (!SignInInputs) {
        return;
    }
    for (let i = 0; i < SignInInputs.length; i++) {
        SignInInputs[i].onblur = () => {
            console.log(`${SignInInputs[i].name}.onblur()`);
            if (SignInInputs[i].value === "") {
                SignInInputs[i].classList.add("invalid");
            }
        };
        SignInInputs[i].onfocus = () => {
            console.log(`${SignInInputs[i].name}.onfocus()`);
            if (SignInInputs[i].classList.contains("invalid")) {
                SignInInputs[i].classList.remove("invalid");
            }
        };
    }

    document.getElementById(`${className}confirm-button`)?.addEventListener("click", validate);
}
