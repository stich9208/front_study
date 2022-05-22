export const store = {
  state: {},
  setState(newState) {
    this.state = { ...this.state, ...newState };
  },
};
