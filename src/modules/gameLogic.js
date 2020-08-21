import Board from './gameBoard';
import Display from './display';

const gameLogic = (() => {
  const winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];

  const initResetButton = () => {
    const resetBtn = document.querySelector('.btn-reset');
    resetBtn.onclick = () => {
      Board.resetBoard();
      Display.loadBlankBoard();
    };
  };

  const checkWinner = (symbol, boardArray) => winningCombinations.some(combo => combo.every(idx => boardArray[idx] === symbol));


  return { initResetButton, checkWinner };
})();
export default gameLogic;
