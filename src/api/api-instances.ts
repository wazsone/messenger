import { HTTP } from "../modules/http";

export const apiInstance = new HTTP('ya-praktikum.tech/api/v2');
export const authAPIInstance = new HTTP('ya-praktikum.tech/api/v2/auth');
export const chatAPIInstance = new HTTP('ya-praktikum.tech/api/v2/chats');
export const usersAPIInstance = new HTTP('ya-praktikum.tech/api/v2/user');