import { alert } from "./components/alert.js";

const root = document.querySelector('#root');

root.append(alert('primary', 'Todo ha ido bien!'));