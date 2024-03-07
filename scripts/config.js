config = {
  GRID_SIZE: 3,
  EMPTY_1: 4,
  EMPTY_2: 4,
  TARGET: 1,

  BLUE_LIGHT: "c6eafb",
  BLUE_DARK: "00aeef",

  POINTS_PER_ROUND: 100,
  WINNING_POINTS: 1000,
  INITIAL_TIME_PER_ROUND: 3,
  GET_NEXT_TIME_PER_ROUND: function (timeForLastRound) {
    const timeForNextRound = timeForLastRound * 0.95;
    return timeForNextRound;
  },

  TARGET_CELL_IMAGE: "./assets/images/target.jpg"
};
