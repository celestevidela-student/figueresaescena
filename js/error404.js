const homeButton = document.getElementById('tornar-inici');

if (homeButton) {
  homeButton.addEventListener('click', () => {
    window.location.href = 'index.html';
  });
}
