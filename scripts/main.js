const state = new State();

const resetRound = () => {
  DOM.removeOnCellClick(onCellClick);
  state.startTimer(config.TIME_PER_ROUND, () => {
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

  resetRound();
};

document.addEventListener('DOMContentLoaded', () => {
  state.setPage('game-page');
  resetRound();
});
