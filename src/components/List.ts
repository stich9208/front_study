import { createHtmlElement, updateState } from "../util";
import { render, store } from "../index";

const main = document.getElementsByClassName("App")[0];

export const List = (): string => {
  return `<div>List<button class="bubu">Click me !!!</button></div>`;
};
