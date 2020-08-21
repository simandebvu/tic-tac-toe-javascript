import './assets/styles/style.css';
import gameBoard from './modules/gameBoard';
import gameLogic from './modules/gameLogic';
import gamePlayer from './modules/gamePlayer';
import display from './modules/display';

const startApp = (() => {
  let playerO = null;
  let playerX = null;
  let currentPlayer = null;
  display.showPlayerModal();
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
  });

  gameLogic.initResetButton();

  const switchUser = () => {
    currentPlayer = currentPlayer === playerX ? playerO : playerX;
  };

  const endGame = (message) => {
    display.showWinner(`${message} has won!`);
    const b = document.querySelector('.btn-win-reset');
    b.onclick = () => {
      const winnerContainerDiv = document.querySelector('.winning-message');
      winnerContainerDiv.classList.remove('show');
      gameBoard.resetBoard();
      display.loadBlankBoard();
    };
  };

  cellDivs.forEach(e => {
    e.onclick = () => {
      const invalid = gameBoard.validateMove(e.getAttribute('index'));
      if (!invalid) {
        updateGameArray(e.getAttribute('index'), currentPlayer.getSymbol());
        const winner = gameLogic.checkWinner(currentPlayer.getSymbol(), getGameArray());
        if (winner) {
          const winnersName = currentPlayer.getName();
          endGame(winnersName);
        } else if (gameLogic.checkDraw(gameBoard.getGameArray())) {
          endGame('Everyone');
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
