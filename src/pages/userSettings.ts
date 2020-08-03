import { renderDOM } from "../utils/renderUtils";
import { UserSettings } from "../components/UserSettings/index";
import { getData } from "../data/userSettings";

const userSettingsData = getData();
const form = new UserSettings(userSettingsData);

renderDOM(".main", form);
