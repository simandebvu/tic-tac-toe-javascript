import './assets/styles/style.css';
import gameBoard from './modules/gameBoard';


const startApp = (() => {
  const { getGameArray, renderGameBoard, updateGameArray } = gameBoard;
  const cellDivs = document.querySelectorAll('.game-cell');
  const cellHandler = (e) => {
    console.log(e);
  };

  cellDivs.forEach(e => {
    // const currentIndex = e.getAttribute('index');
    // e.addEventListener('click', cellHandler);
    e.onclick = () => {
      console.log(e.getAttribute('index'));
      updateGameArray(e.getAttribute('index'), 'X');
    };
  });
  return { updateGameArray, getGameArray, renderGameBoard };
})();

// Select Elements
// const restartBtn = document.querySelector('.restart');
// const cellDivs = document.querySelectorAll('.game-cell');

// // Functions
// const restartGame = (e) => {
//   console.log(e);
// };

// const cellHandler = (e) => {
//   console.log(e);
// };

// // Add Events
// restartBtn.addEventListener('click', restartGame);
// cellDivs.forEach(e => {
//   e.addEventListener('click', cellHandler);
// });