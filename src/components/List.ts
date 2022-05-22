import { getList } from "../util";

const main = document.getElementsByClassName("App")[0];

export const List = (): string => {
  getList();
  return `<div>List<button class="bubu">Click me !!!</button><button class="detail"> detail !!!</button></div>`;
};
