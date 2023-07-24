import { alert } from "./components/alert.js";
import { navbar } from "./components/navbar.js";

const root = document.querySelector('#root');

root.append(alert('primary', 'Todo ha ido bien!'));
root.append(navbar());