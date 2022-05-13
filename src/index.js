import "../styles.css";

import { App } from "./App";

const main = document.getElementsByClassName("App")[0];

main.innerHTML = `<h1>SPA Test</h1>${App()}`;
