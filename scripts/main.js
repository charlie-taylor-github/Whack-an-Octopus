const state = new State();

const resetRound = () => {
  DOM.removeOnCellClick(onCellClick);
  state.updateTimePerRound(previousRoundTime => {
    return config.GET_NEXT_TIME_PER_ROUND(previousRoundTime);
  })
  state.startTimer(() => {
    state.loseLife();
    resetRound();
  });

  state.generateGrid(
    config.EMPTY_1,
    config.EMPTY_2,
    config.TARGET
  );

  DOM.addOnCellClick(onCellClick);
};

const onCellClick = (type) => {
  if (type === 'target') {
    state.addPoints(config.POINTS_PER_ROUND);
  } else {
    state.loseLife();
  }

  if (state.getLives() <= 0) {
    state.setPage('game-over-page');
    return;
  }

  if (state.getPoints() >= config.WINNING_POINTS) {
    state.setPage('winner-page');
    return;
  }

  resetRound();
};

const setupGame = () => {
  state.updateTimePerRound(() => config.INITIAL_TIME_PER_ROUND);
}


document.addEventListener('DOMContentLoaded', () => {
  DOM.addOnPlay(() => {
    state.setPage('game-page');
    setupGame();
    resetRound();
  })
  state.setPage('home-page');
});
