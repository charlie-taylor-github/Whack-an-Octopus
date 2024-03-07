const state = new State();
let game;

const handleWin = () => {
  state.setPage('winner-page');
};

const handleLose = () => {
  state.setPage('game-over-page');
}

const handlePlay = () => {
  state.setPage('game-page');
  game = new Game(state, handleLose, handleWin);
  game.start();
}

const init = () => {
  DOM.addOnPlay(handlePlay);
  state.setPage('home-page');
}

document.addEventListener('DOMContentLoaded', init);
