import { renderDOM } from "../utils/renderUtils";
import { getData } from "../data/chatScreen";
import { ChatScreen } from "../components/ChatScreen/index";

const chatScreenData = getData();
const form = new ChatScreen(chatScreenData);

renderDOM(".main", form);
