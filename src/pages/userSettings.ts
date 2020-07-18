import { renderDOM } from "../utils/renderUtils.js";
import { UserSettings } from "../components/UserSettings/index.js";
import { getData } from "../data/userSettings.js";

const userSettingsData = getData();
const form = new UserSettings(userSettingsData);

renderDOM(".main", form);
