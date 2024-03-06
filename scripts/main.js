const state = new State();

const onCellClick = (type) => {

  if (type === 'target') {
    state.addPoints(config.POINTS_PER_ROUND);
  } else {
    state.loseLife();
  }

  state.generateGrid(config.EMPTY_1, config.EMPTY_2, config.TARGET);
  DOM.addOnCellClick(onCellClick);
};

document.addEventListener('DOMContentLoaded', () => {
  state.setPage('game-page');
  state.generateGrid(config.EMPTY_1, config.EMPTY_2, config.TARGET);
  DOM.addOnCellClick(onCellClick);
});
