const setProperty = (property, value) => {
  document.documentElement.style.setProperty(property, value);
}

setProperty('--grid-size', config.GRID_SIZE);

// update the --vh custom property to the current viewport height
window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  setProperty('--vh', `${vh}px`);
});

window.dispatchEvent(new Event('resize'));

// add all the cells to the grid
for (let i = 0; i < config.GRID_SIZE ** 2; i++) {
  const cell = document.createElement('div');
  cell.classList.add('grid-cell');
  document.querySelector('#grid').appendChild(
    cell
  )
}
