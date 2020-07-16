import { renderDOM } from "../utils/renderUtils.js";
import { getData } from "../data/chatScreen.js";
import ChatScreen from "../components/ChatScreen/index.js";

const chatScreenData = getData();
const form = new ChatScreen(chatScreenData);

renderDOM(".main", form);
