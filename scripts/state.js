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
      grid: [],
      lives: 3,
      points: 0
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

  generateGrid(empty1, empty2, target) {
    const grid = [
      ...Array(empty1).fill('empty_1'),
      ...Array(empty2).fill('empty_2'),
      ...Array(target).fill('target'),
    ];

    if (grid.length !== config.GRID_SIZE ** 2) {
      throw new Error('Invalid grid size');
    }

    for (let i = grid.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [grid[i], grid[j]] = [grid[j], grid[i]];
    }

    this.#update({ grid });
  }

  loseLife() {
    this.#update({ lives: this.#state.lives - 1 });
  }

  output() {
    console.log(this.#state);
  }

  addPoints(points) {
    this.#update({ points: this.#state.points + points });
  }
}
