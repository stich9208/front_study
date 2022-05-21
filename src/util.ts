export const createHtmlElement = (el: string): HTMLElement => {
  const element = document.createElement(el);
  return element;
};

export const updateState = (
  newState: any,
  state: any,
  root: any,
  render: Function
): EventListener => {
  let updatedState = Object.assign(state, newState);
  state = updatedState;
  return render(root);
};
