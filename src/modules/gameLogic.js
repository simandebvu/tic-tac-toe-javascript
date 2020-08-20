import Board from './gameBoard';
import Display from './display';

const gameLogic = (() => {
  const initResetButton = () => {
    const resetBtn = document.querySelector('.btn-reset');
    resetBtn.onclick = () => {
      Board.resetBoard();
      Display.loadBlankBoard();
    };
  };

  const checkWin = (a, b, c) => {
    if ((a === b) && b === c) {
      if ((a === '') || (b === '') || (c === '')) {
        return null;
      }
      alert('Win!');
    }
    return null;
  };

  const checkDiag = (gameArray) => {
    // We are comparting 3 things
    const leftDiag = checkWin(gameArray[0], gameArray[4], gameArray[8]);
    const rightDiag = checkWin(gameArray[2], gameArray[4], gameArray[6]);
    return leftDiag || rightDiag;
  };

  const checkRow = (gameArray) => {
    // We are comparting 3 things
    const topRow = checkWin(gameArray[0], gameArray[1], gameArray[2]);
    const middleRow = checkWin(gameArray[3], gameArray[4], gameArray[5]);
    const bottomRow = checkWin(gameArray[6], gameArray[7], gameArray[8]);
    return topRow || (middleRow || bottomRow);
  };

  const checkCol = (gameArray) => {
    const leftCol = checkWin(gameArray[0], gameArray[3], gameArray[6]);
    const middleCol = checkWin(gameArray[1], gameArray[4], gameArray[7]);
    const rightCol = checkWin(gameArray[2], gameArray[5], gameArray[8]);
    return leftCol || (middleCol || rightCol);
  };

  const getWinner = (gameArr) => checkDiag(gameArr) || (checkRow(gameArr) || checkCol(gameArr));

  return { initResetButton, getWinner };
})();
export default gameLogic;
