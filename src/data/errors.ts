"use strict";

export function getData(statusCode: string) {
    let errorMessage = "Something strange has happened ;)";
    if (statusCode === "404") {
        errorMessage = "Oops! Wrong hit";
    }
    if (statusCode === "500") {
        errorMessage = "Sorry, we are already fixing";
    }
    return {
        errorCode: statusCode,
        errorMessage: errorMessage,
    };
}
