import './assets/styles/style.css';
import gameBoard from './modules/gameBoard';
import gameLogic from './modules/gameLogic';
import gamePlayer from './modules/gamePlayer';
import display from './modules/display';

const startApp = (() => {
  // const player1 = gamePlayer(players.player1.value, 'X');
  // const player2 = gamePlayer(players.player2.value, 'O');
  // alert(player1.getName());
  // alert(player2.getName());
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
      updateGameArray(e.getAttribute('index'), currentPlayer.getSymbol());
      switchUser();
    };
  });
  return { getGameArray };
})();
