const state = new State();

const resetGrid = () => {
  state.generateGrid(
    config.EMPTY_1,
    config.EMPTY_2,
    config.TARGET
  );
  DOM.addOnCellClick(onCellClick);
}

const onCellClick = (type) => {
  if (type === 'target') {
    state.addPoints(config.POINTS_PER_ROUND);
  } else {
    state.loseLife();
  }

  resetGrid();
};

document.addEventListener('DOMContentLoaded', () => {
  state.setPage('game-page');
  resetGrid();
});
