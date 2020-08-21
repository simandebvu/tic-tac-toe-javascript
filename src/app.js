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
    const winner = gameLogic.checkWinner(currentPlayer.getSymbol(), getGameArray());
    if (winner) {
      const winnersName = currentPlayer.getName();
      display.showWinner(`${winnersName} has won!`);
      const b = document.querySelector('.btn-win-reset');
      b.onclick = () => {
        const winnerContainerDiv = document.querySelector('.winning-message');
        winnerContainerDiv.classList.toggle('show');
        gameBoard.resetBoard();
        display.loadBlankBoard();
      };
    }
    currentPlayer = currentPlayer === playerX ? playerO : playerX;
  };

  cellDivs.forEach(e => {
    e.onclick = () => {
      const invalid = gameBoard.validateMove(e.getAttribute('index'));
      if (!invalid) {
        updateGameArray(e.getAttribute('index'), currentPlayer.getSymbol());
        if (gameLogic.checkDraw(gameBoard.getGameArray())) {
          display.showWinner('Everyone is a winner !');
          const b = document.querySelector('.btn-win-reset');
          b.onclick = () => {
            const winnerContainerDiv = document.querySelector('.winning-message');
            winnerContainerDiv.classList.toggle('show');
            gameBoard.resetBoard();
            display.loadBlankBoard();
          };
        } else {
          switchUser();
        }
      } else {
        alert('Invalid move!');
      }
      display.showCurrentPlayer(`${currentPlayer.getName()} - ${currentPlayer.getSymbol()} `);
    };
  });
  return { getGameArray };
})();
