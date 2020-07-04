"use strict";
export function handle404Error(_, res) {
    res.render("common/error", {
        title: "404",
        errorCode: "404",
        errorMessage: "Wrong hit",
    });
}

export function handle500Error(_, res) {
    res.render("common/error", {
        title: "500",
        errorCode: "500",
        errorMessage: "Wrong hit",
    });
}
