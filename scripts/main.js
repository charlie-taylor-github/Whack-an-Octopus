const state = new State();

document.addEventListener('DOMContentLoaded', () => {
  state.setPage('game-page');
  state.generateGrid(4, 4, 1);
});
