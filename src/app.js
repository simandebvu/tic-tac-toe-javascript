import './assets/styles/style.css';
import gameBoard from './modules/gameBoard';
import gameLogic from './modules/gameLogic';
import display from './modules/display';

const startApp = (() => {
  display.showPlayerModal();
  const { getGameArray, updateGameArray } = gameBoard;
  const cellDivs = document.querySelectorAll('.game-cell');
  let currentSymbol = 'X';
  gameLogic.initResetButton();

  const switchUser = async () => {
    const winner = await gameLogic.getWinner(getGameArray());
    if (winner) {
      alert('Win');
    }
    currentSymbol = currentSymbol === 'X' ? 'O' : 'X';
  };

  cellDivs.forEach(e => {
    e.onclick = () => {
      updateGameArray(e.getAttribute('index'), currentSymbol);
      switchUser();
    };
  });
  return { getGameArray };
})();
