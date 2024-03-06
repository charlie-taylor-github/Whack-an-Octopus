class DOM {
  static #setPage(state) {
    const pages = document.querySelectorAll('.page');
    pages.forEach(page => page.style.display = 'none');

    const currentPage = document.querySelector(`#${state.page}`);
    if (currentPage) {
      currentPage.style.display = 'block';
    }
  }

  static update(state) {
    this.#setPage(state);
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

  static addCellsToGrid(count) {
    for (let i = 0; i < count; i++) {
      const cell = document.createElement('div');
      cell.classList.add('grid-cell');
      document.querySelector('#grid').appendChild(cell)
    }
  }
}
