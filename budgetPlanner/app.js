import { alert } from "./components/alert.js";
import { main } from "./components/main.js";
import { navbar } from "./components/navbar.js";
import { loginForm } from "./components/loginForm.js";

const root = document.querySelector('#root');

root.append(navbar());
root.append(
    main({
      components: [loginForm()]
  })
);

//root.append(alert('primary', 'Todo ha ido bien!'));


