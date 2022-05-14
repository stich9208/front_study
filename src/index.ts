import "../styles.css";
import { App } from "./App";

const main = document.getElementsByClassName("App")[0];

const render = (app: Function): void => {
  main.innerHTML = app();
};

render(App);
