import './assets/styles/style.css';
import gameBoard from './modules/gameBoard';
import gameLogic from './modules/gameLogic';

const startApp = (() => {
  const { getGameArray, updateGameArray } = gameBoard;
  const cellDivs = document.querySelectorAll('.game-cell');
  let currentSymbol = 'X';
  gameLogic.initResetButton();

  cellDivs.forEach(e => {
    e.onclick = () => {
      updateGameArray(e.getAttribute('index'), currentSymbol);
      if (currentSymbol === 'X') {
        currentSymbol = 'O';
      } else {
        currentSymbol = 'X';
      }
    };
  });
  return { getGameArray };
})();
