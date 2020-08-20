import './assets/styles/style.css';
import gameBoard from './modules/gameBoard';
import gameLogic from './modules/gameLogic';

const startApp = (() => {
  const { getGameArray, updateGameArray } = gameBoard;
  const cellDivs = document.querySelectorAll('.game-cell');
  gameLogic.initResetButton();

  cellDivs.forEach(e => {
    // const currentIndex = e.getAttribute('index');
    // e.addEventListener('click', cellHandler);
    e.onclick = () => {
      updateGameArray(e.getAttribute('index'), 'X');
    };
  });
  return { getGameArray };
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