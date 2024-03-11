class Game {
  #state;
  #handleLose;
  #handleWin;
  #active = false;

  #onCellClick = (type) => {
    if (type === 'target') {
      this.#state.addPoints(config.POINTS_PER_ROUND);
      this.#state.playWinPoint();
    } else {
      this.#state.loseLife();
      this.#state.playLoseLife();
    }

    this.#startNewRound();
  }

  #startNewRound() {
    this.#state.stopCheers();
    if (!this.#active) return;
    if (this.#state.getLives() <= 0) return this.#handleLose();
    if (state.getPoints() >= config.WINNING_POINTS) {
      this.#active = false;
      this.#state.resetHighscore();
      return this.#handleWin();
    }

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
    this.#active = true;
    this.#startNewRound();
  }
}