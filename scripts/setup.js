DOM.setProperty('--grid-size', config.GRID_SIZE);
DOM.setProperty('--blue-light', `#${config.BLUE_LIGHT}`);
DOM.setProperty('--blue-dark', `#${config.BLUE_DARK}`);

window.addEventListener(
  'resize', () => DOM.updateViewportHeight()
);

window.dispatchEvent(new Event('resize'));
// window.onerror = e => alert(e);
