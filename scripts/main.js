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

  if (state.getLives() <= 0) return handleLose();
  if (state.getPoints() >= config.WINNING_POINTS) return handleWin();
  resetRound();
};

const setupGame = () => {
  state.resetGame();
  state.updateTimePerRound(() => config.INITIAL_TIME_PER_ROUND);
}

const handleWin = () => {
  state.setPage('winner-page');
};

const handleLose = () => {
  state.setPage('game-over-page');
}

const handlePlay = () => {
  state.setPage('game-page');
  setupGame();
  resetRound();
}

const init = () => {
  DOM.addOnPlay(handlePlay);
  state.setPage('home-page');
}

document.addEventListener('DOMContentLoaded', init);
