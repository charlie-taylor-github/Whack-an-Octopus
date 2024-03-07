class State {
  #state;
  #timerId;

  async #update(changes) {
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
      points: 0,
      time: 0,
      timePerRound: 0,
    }
    this.#timerId = null;
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

  async generateGrid(empty1, empty2, target) {
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

    await this.#update({ grid });
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

  startTimer(callback) {
    if (this.#timerId) clearInterval(this.#timerId);
    const time = this.#state.timePerRound;
    if (time <= 0) throw new Error('Invalid time');

    this.#state.time = time;
    this.#timerId = setInterval(() => {
      this.#state.time -= 0.01;
      DOM.updateTimer(this.#state.time);
      if (this.#state.time <= 0) {
        clearInterval(this.#timerId);
        this.#timerId = null;
        callback();
      }
    }, 10);
  }

  updateTimePerRound(getNextTimePerRound) {
    const timeForNextRound = getNextTimePerRound(this.#state.timePerRound);
    this.#update({ timePerRound: timeForNextRound });
  }

  getPoints() {
    return this.#state.points;
  }

  getLives() {
    return this.#state.lives;
  }

  resetGame() {
    this.#update({
      grid: [],
      lives: 3,
      points: 0,
      time: 0,
      timePerRound: 0,
    });
  }
}
