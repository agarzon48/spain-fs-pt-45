import { alert } from "./components/alert.js";
import { main } from "./components/main.js";
import { navbar } from "./components/navbar.js";
import { loginForm } from "./components/loginForm.js";

const root = document.querySelector('#root');
const mainComponent = main();

root.append(navbar());
root.append(mainComponent);
mainComponent.append(loginForm());

//root.append(alert('primary', 'Todo ha ido bien!'));


