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

  return { initResetButton };
})();
export default gameLogic;
