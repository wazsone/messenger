import { HTTP } from "../modules/http";

const baseHeaders = { ["Content-type"]: "application/json; charset=utf-8" };

export const API_URL = "ya-praktikum.tech/api/v2";
export const apiInstance = new HTTP({ baseUrl: API_URL, baseHeaders: baseHeaders });
export const authAPIInstance = new HTTP({ baseUrl: `${API_URL}/auth`, baseHeaders: baseHeaders });
export const chatAPIInstance = new HTTP({ baseUrl: `${API_URL}/chats`, baseHeaders: baseHeaders });
export const usersAPIInstance = new HTTP({ baseUrl: `${API_URL}/user`, baseHeaders: baseHeaders });
