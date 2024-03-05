window.addEventListener('resize', () => {
  let vh = window.innerHeight * 0.01;
  console.log(vh)
  document.documentElement.style.setProperty('--vh', `${vh}px`);
});

window.dispatchEvent(new Event('resize'));
