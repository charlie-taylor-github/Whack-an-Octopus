class State {
  #state;

  #update(changes) {
    this.#state = {
      ...this.#state,
      ...changes
    };
    DOM.update(this.#state);
  }

  constructor() {
    this.#state = {
      page: 'home-page',
    }
  }

  setPage(page) {
    this.#update({ page });;
  }
}
