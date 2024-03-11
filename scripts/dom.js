class DOM {
  static soundtrackAudio = new Audio(config.SOUND_FILE_PATHS.SOUNDTRACK);

  static #setPage(state) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    const currentPage = document.querySelector(`#${state.page}`);
    if (currentPage) {
      currentPage.style.display = 'block';
    }
  }

  static #addCellsToGrid(grid) {
    document.querySelector('#grid').innerHTML = '';
    for (const c of grid) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      if (c === 'empty_1') cell.classList.add('grid-cell-empty-1');
      else if (c === 'empty_2') cell.classList.add('grid-cell-empty-2');
      else if (c === 'target') {
        cell.classList.add('grid-cell-target');
        cell.innerHTML = `<img src="${config.TARGET_CELL_IMAGE}" alt="target" draggable="false" ondragstart="return false;">`;
      }
      else continue;
      document.querySelector('#grid').appendChild(cell)
    }
  }

  static #setLifeImages(lives) {
    const lifeImages = document.querySelectorAll('.life-image');
    for (let i = 0; i < lifeImages.length; i++) {
      if (i < lives) {
        lifeImages[i].style.display = 'block';
      } else {
        lifeImages[i].style.display = 'none';
      }
    }
  }

  static #setPoints(points) {
    document.querySelector('#score-text').textContent = points;
  }

  static #setHighscore(highscore) {
    document.querySelector('#high-score-text').textContent = highscore;
  }

  static #setScoreImages(points) {
    const progress = points / config.WINNING_POINTS;
    const totalStates = 3 * 10;
    const currentState = Math.floor(progress * totalStates);

    const scoreImages = document.querySelectorAll('.score-image');

    for (let i = 0; i < scoreImages.length; i++) {
      const image = scoreImages[i];
      let imageState;
      if (Math.floor(currentState / 10) > i) {
        imageState = 9;
      } else if (Math.floor(currentState / 10) < i) {
        imageState = 0;
      } else {
        imageState = currentState % 10;
      }
      image.src = `./assets/images/score/${i + 1}/${imageState}.jpg`;
    }
  }

  static update(state) {
    this.#setPage(state);
    this.#addCellsToGrid(state.grid);
    this.#setLifeImages(state.lives);
    this.#setPoints(state.points);
    this.#setHighscore(state.highscore);
    this.#setScoreImages(state.points);
  }

  static updateTimer(time) {
    if (!time instanceof Number) throw Error('time must be number');
    let value = time.toFixed(1);
    if (value <= 0) value = 0;
    document.querySelector('#timer-text').textContent = value;
  }

  static setProperty(property, value) {
    document.documentElement.style.setProperty(property, value);
  }

  static updateViewportHeight() {
    let vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty(
      '--vh',
      `${vh}px`
    );
  }

  static addOnCellClick(callback) {
    const cells = document.querySelectorAll('.grid-cell');
    for (const c of cells) {
      let type;
      if (c.classList.contains('grid-cell-empty-1')) type = 'empty_1';
      else if (c.classList.contains('grid-cell-empty-2')) type = 'empty_2';
      else if (c.classList.contains('grid-cell-target')) type = 'target';
      else continue;
      c.addEventListener('click', (e) => {
        e.stopPropagation();
        callback(type);
      });
    }
  }

  static removeOnCellClick(callback) {
    const cells = document.getElementsByClassName('grid-cell');
    for (const c of cells) {
      c.removeEventListener('click', callback);
    }
  }

  static addOnPlay(callback) {
    const playButtons = document.querySelectorAll(
      '#play-button, #winner-play-button, #game-over-play-button'
    );

    for (const button of playButtons) {
      button.addEventListener('click', callback);
    }
  }

  static playSound(sound, options = {}) {
    if (options.loop) sound.loop = true;
    sound.play();
  }
}
