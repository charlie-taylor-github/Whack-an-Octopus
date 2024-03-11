config = {
  // GRID SETUP
  GRID_SIZE: 3,
  EMPTY_1: 4,
  EMPTY_2: 4,
  TARGET: 1,
  BLUE_LIGHT: "c6eafb",
  BLUE_DARK: "00aeef",

  // GAME LOGIC
  POINTS_PER_ROUND: 100,
  WINNING_POINTS: 300,
  INITIAL_TIME_PER_ROUND: 3,
  GET_NEXT_TIME_PER_ROUND: function (timeForLastRound) {
    const timeForNextRound = timeForLastRound * 0.95;
    return timeForNextRound;
  },

  // ASSETS
  TARGET_CELL_IMAGE: "./assets/images/target.jpg",
  SOUND_FILE_PATHS: {
    SOUNDTRACK: "./assets/sounds/soundtrack.mp3",
    CHEERS: "./assets/sounds/cheers.mp3",
    LOSE_LIFE: "./assets/sounds/lose-life.mp3",
    WIN_POINT: "./assets/sounds/win-point.mp3"
  }
};
