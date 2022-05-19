import { createHtmlElement } from "../util";

export const Detail = (): HTMLElement => {
  const div_ = createHtmlElement("div");
  div_.innerText = "Detail";
  return div_;
};
