const state = new State();

const onCellClick = (type) => {
  state.generateGrid(config.EMPTY_1, config.EMPTY_2, config.target);
  DOM.addOnCellClick(onCellClick);
  console.log(type);
};

document.addEventListener('DOMContentLoaded', () => {
  state.setPage('game-page');
  state.generateGrid(config.EMPTY_1, config.EMPTY_2, config.target);
  DOM.addOnCellClick(onCellClick);
});
