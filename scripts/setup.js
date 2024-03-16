DOM.setProperty('--grid-size', config.GRID_SIZE);
DOM.setProperty('--blue-light', `#${config.BLUE_LIGHT}`);
DOM.setProperty('--blue-dark', `#${config.BLUE_DARK}`);

const grid = document.getElementById('grid');
const container = document.getElementById('game-section');

const resizeObserver = new ResizeObserver(entries => {
  const gridSize = Math.min(container.offsetWidth, container.offsetHeight);
  grid.style.width = gridSize + 'px';
  grid.style.height = gridSize + 'px';
});

resizeObserver.observe(container);

window.addEventListener(
  'resize', () => {
    DOM.updateViewportHeight();
  }
);

window.dispatchEvent(new Event('resize'));

document.addEventListener('DOMContentLoaded', () => {
  grid.style.display = 'grid';
});
