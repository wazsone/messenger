enum METHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

function queryStringify(data: object) {
    if (typeof data !== "object") {
        throw new Error("Data must be object");
    }

    function getObjQueryStringify(obj) {
        const keys = Object.keys(obj);
        return keys.reduce((result, key) => {
            if (typeof obj[key] === "object") {
                return `${result}[${key}]${getObjQueryStringify(obj[key])}`;
            }
            return `${result}[${key}]=${obj[key]}`;
        }, "");
    }

    const keys = Object.keys(data);
    return keys.reduce((result, key, index) => {
        if (Array.isArray(data[key])) {
            let str = "";
            for (let i = 0; i < data[key].length; i++) {
                str += `${key}[${i}]=${data[key][i]}${
                    i < data[key].length - 1 ? "&" : ""
                    }`;
            }
            return `${result}${str}${index < keys.length - 1 ? "&" : ""}`;
        }
        if (typeof data[key] === "object") {
            const objQuery = getObjQueryStringify(data[key]);
            return `${result}${key}${objQuery}${
                index < keys.length - 1 ? "&" : ""
                }`;
        }
        return `${result}${key}=${data[key]}${
            index < keys.length - 1 ? "&" : ""
            }`;
    }, "");
}

interface ICommonOptions {
    headers: object;
    data: object;
}

interface IRequestOptions extends Partial<ICommonOptions> {
    method?: METHODS;
}

interface IMethodsOptions extends Partial<ICommonOptions> {
    timeout?: number;
}

export class HTTP {
    private baseUrl: string;
    constructor(baseUrl: string) {
        this.baseUrl = baseUrl ?? "";
    }

    get = (url: string, options: IMethodsOptions = {}) => {
        url = `${this.baseUrl}${url}`;
        return this.request(
            url,
            {
                ...options,
                method: METHODS.GET,
            },
            options.timeout
        );
    };
    post = (url: string, options: IMethodsOptions = {}) => {
        url = `${this.baseUrl}${url}`;
        const headers = {
            ["Content-type"]: "application/json; charset=utf-8",
        };
        return this.request(
            url,
            {
                ...options,
                method: METHODS.POST,
                headers: {
                    ...headers,
                    ...options.headers,
                },
            },
            options.timeout
        );
    };
    put = (url: string, options: IMethodsOptions = {}) => {
        url = `${this.baseUrl}${url}`;
        const headers = {
            ["Content-type"]: "application/json; charset=utf-8",
        };
        return this.request(
            url,
            {
                ...options,
                method: METHODS.PUT,
                headers: {
                    ...headers,
                    ...options.headers,
                },
            },
            options.timeout
        );
    };
    delete = (url: string, options: IMethodsOptions = {}) => {
        url = `${this.baseUrl}${url}`;
        return this.request(
            url,
            {
                ...options,
                method: METHODS.DELETE,
            },
            options.timeout
        );
    };
    request = (
        url: string,
        options: IRequestOptions = {},
        timeout: number = 5000
    ) => {
        url = `${this.baseUrl}${url}`;
        const { headers = {}, method, data } = options;

        return new Promise(function (resolve, reject) {
            if (!method) {
                reject("No method");
                return;
            }

            const xhr = new XMLHttpRequest();
            const isGet = method === METHODS.GET;
            const isDelete = method === METHODS.DELETE;

            xhr.open(
                method,
                isGet && !!data ? `${url}${queryStringify(data)}` : url,
                true
            );

            Object.keys(headers).forEach((key) => {
                xhr.setRequestHeader(key, headers[key]);
            });

            xhr.onload = function () {
                resolve(xhr);
            };

            xhr.onabort = reject;
            xhr.onerror = reject;

            xhr.timeout = timeout;
            xhr.ontimeout = reject;

            if (isGet || isDelete || !data) {
                xhr.send();
            } else {
                xhr.send(JSON.stringify(data));
            }
        });
    };
}
