import './assets/styles/style.css';
import gameBoard from './modules/gameBoard';
import gameLogic from './modules/gameLogic';
import gamePlayer from './modules/gamePlayer';
import display from './modules/display';

// IIFE
// eslint-disable-next-line no-unused-vars
const startApp = (() => {
  let playerO = null;
  let playerX = null;
  let currentPlayer = null;
  display.showPlayerModal();
  gameLogic.initRestartButton();
  const { getGameArray, updateGameArray } = gameBoard;
  const cellDivs = document.querySelectorAll('.game-cell');
  const gameForm = document.querySelector('form');
  gameForm.onsubmit = ((e) => {
    e.preventDefault();
    const modalDiv = document.querySelector('.modal-container');
    const { player1, player2 } = e.target.elements;
    playerX = gamePlayer(player1.value, 'X');
    playerO = gamePlayer(player2.value, 'O');
    currentPlayer = playerX;
    modalDiv.classList.remove('show-modal');
    display.showCurrentPlayer(`${currentPlayer.getName()} - ${currentPlayer.getSymbol()} `);
  });

  gameLogic.initResetButton();

  const switchUser = () => {
    currentPlayer = currentPlayer === playerX ? playerO : playerX;
  };

  cellDivs.forEach(e => {
    e.onclick = () => {
      const invalid = gameBoard.validateMove(e.getAttribute('index'));
      if (!invalid) {
        updateGameArray(e.getAttribute('index'), currentPlayer.getSymbol());
        const winner = gameLogic.checkWinner(currentPlayer.getSymbol(), getGameArray());
        if (winner) {
          const winnersName = currentPlayer.getName();
          gameLogic.endGame(winnersName);
        } else if (gameLogic.checkDraw(gameBoard.getGameArray())) {
          gameLogic.endGame('Everyone');
        } else {
          switchUser();
        }
      } else {
        const snackbar = document.querySelector('#snackbar');
        snackbar.textContent = 'Invalid move!';
        snackbar.classList.add('show');
        setTimeout(() => { snackbar.className = snackbar.className.replace('show', ''); }, 3000);
      }
      display.showCurrentPlayer(`${currentPlayer.getName()} - ${currentPlayer.getSymbol()} `);
    };
  });
  return { getGameArray };
})();
