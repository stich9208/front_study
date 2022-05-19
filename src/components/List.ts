import { createHtmlElement } from "../util";

export const List = (): HTMLElement => {
  const div_ = createHtmlElement("div");
  div_.innerText = "List";
  return div_;
};
