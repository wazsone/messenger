import { ICreateChatRequest } from "../api/chat-api";

enum METHODS {
    GET = "GET",
    POST = "POST",
    PUT = "PUT",
    DELETE = "DELETE",
}

// all request interfaces:
// ICreateChatRequest | ICreateSignUpRequest | ...
type requestData = ICreateChatRequest;

interface ICommonOptions {
    headers: object;
    data: requestData;
}

interface IRequestOptions extends Partial<ICommonOptions> {
    method?: METHODS;
}

interface IMethodsOptions extends Partial<ICommonOptions> {
    timeout?: number;
}

interface IHeaders {
    [prop: string]: string;
}

interface IHTTPParams {
    baseUrl?: string;
    baseHeaders?: IHeaders;
}

export class HTTP {
    private baseUrl: string;
    private baseHeaders: IHeaders;
    constructor(baseParams: IHTTPParams) {
        this.baseUrl = baseParams.baseUrl ?? "";
        this.baseHeaders = baseParams.baseHeaders ?? {};
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
        return this.request(
            url,
            {
                ...options,
                method: METHODS.POST,
                headers: {
                    ...this.baseHeaders,
                    ...options.headers,
                },
            },
            options.timeout
        );
    };
    put = (url: string, options: IMethodsOptions = {}) => {
        url = `${this.baseUrl}${url}`;
        return this.request(
            url,
            {
                ...options,
                method: METHODS.PUT,
                headers: {
                    ...this.baseHeaders,
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
                isGet && !!data ? `${url}${Object.keys(data).map(key => key + '=' + data[key]).join('&')}` : url,
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
