class Game {
  #state;
  #handleLose;
  #handleWin;

  #onCellClick = (type) => {
    if (type === 'target') {
      this.#state.addPoints(config.POINTS_PER_ROUND);
    } else {
      this.#state.loseLife();
    }

    if (this.#state.getLives() <= 0) return this.#handleLose();
    if (state.getPoints() >= config.WINNING_POINTS) return this.#handleWin();
    this.#startNewRound();
  }

  #startNewRound() {
    DOM.removeOnCellClick(this.#onCellClick);
    this.#state.updateTimePerRound(previousRoundTime => {
      return config.GET_NEXT_TIME_PER_ROUND(previousRoundTime);
    });

    this.#state.startTimer(() => {
      this.#state.loseLife();
      this.#startNewRound();
    });

    this.#state.generateGrid(
      config.EMPTY_1,
      config.EMPTY_2,
      config.TARGET
    );

    DOM.addOnCellClick(this.#onCellClick);
  }

  constructor(state, handleLose, handleWin) {
    this.#state = state;
    this.#handleLose = handleLose;
    this.#handleWin = handleWin;
  }

  start() {
    this.#state.resetGame();
    this.#state.updateTimePerRound(() => config.INITIAL_TIME_PER_ROUND);
    this.#startNewRound();
  }
}