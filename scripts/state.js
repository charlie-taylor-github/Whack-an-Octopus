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
    const validPages = [
      'home-page', 'game-page', 'game-over-page', 'winner-page'
    ];
    if (!validPages.includes(page)) {
      throw new Error(`Invalid page: ${page}`);
    }
    this.#update({ page });;
  }
}
