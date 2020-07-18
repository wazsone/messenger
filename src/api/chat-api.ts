import { BaseAPI } from "./base-api";
import { chatAPIInstance } from "./api-instances";

export interface ICreateChatRequest {
    title: string;
}

export class ChatAPI extends BaseAPI {
    create() {
        return chatAPIInstance.post("/", { data: { title: "New chat" } });
    }

    request() {
        return chatAPIInstance.get("/");
    }
}