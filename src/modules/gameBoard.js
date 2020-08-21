import Display from './display';

const gameBoard = (() => {
  const gameArray = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];
  const getGameArray = () => gameArray;

  const resetBoard = () => {
    gameArray.forEach((item, idx, arr) => {
      arr[idx] = '';
    });
  };

  const validateMove = (idx) => gameArray[idx].length > 0;

  const updateGameArray = (index, value) => {
    gameArray[index] = value;
    Display.updateGameBoard(index, value);
  };

  return {
    resetBoard,
    getGameArray,
    updateGameArray,
    validateMove,
  };
})();
export default gameBoard;
