class DOM {
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
      else if (c === 'target') cell.classList.add('grid-cell-target');
      else continue;
      document.querySelector('#grid').appendChild(cell)
    }
  }

  static update(state) {
    this.#setPage(state);
    this.#addCellsToGrid(state.grid);
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
}
