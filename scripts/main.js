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

  resetRound();
};

const setup = () => {
  state.updateTimePerRound(() => config.INITIAL_TIME_PER_ROUND);
}


document.addEventListener('DOMContentLoaded', () => {
  state.setPage('game-page');
  setup();
  resetRound();
});
