import "../styles.css";
import { App } from "./App";

const main = document.getElementsByClassName("App")[0];

const popstateEvent = () => console.log("popStateTAET!!!");

window.addEventListener("popstate", popstateEvent);

const render = (): void => {
  main.appendChild(App());
};

render();
