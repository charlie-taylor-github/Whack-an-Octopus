config = {
  // GRID SETUP - EMPTY_1 + EMPTY_2 + TARGET must equal GRID_SIZE**2 (eg: 4 + 4 + 1 = 3**2 = 9)
  GRID_SIZE: 3, // the width and height of the grid (eg 3 -> 3x3 = 9 cells total)
  EMPTY_1: 4, // the number of cells with the first empty state
  EMPTY_2: 4, // the number of cells with the second empty state
  TARGET: 1, // the number of target cells
  BLUE_LIGHT: "c6eafb", // colours for the EMPTY_1 cells
  BLUE_DARK: "00aeef", // colours for the EMPTY_2 cells

  // GAME LOGIC
  POINTS_PER_ROUND: 150, // number of points awarded for hitting the target
  WINNING_POINTS: 1000, // the number of points needed to win the game
  INITIAL_TIME_PER_ROUND: 1, // the amount of time given to hit the target in seconds

  GET_NEXT_TIME_PER_ROUND: function (timeForLastRound) { // a function to calculate the time for the next round
    if (timeForLastRound < 0.1) return 0.5; // minimum time (0.5 seconds)
    const timeForNextRound = timeForLastRound * 0.95; // otherwise, reduce the time by 5%
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
