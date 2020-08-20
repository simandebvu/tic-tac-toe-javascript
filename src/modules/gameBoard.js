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


  const updateGameArray = (index, value) => {
    if (gameArray[index] === '') {
      gameArray[index] = value;
      Display.updateGameBoard(index, value);
    } else {
      alert('Index already occupied with a value');
    }
  };

  return {
    resetBoard,
    getGameArray,
    updateGameArray,
  };
})();
export default gameBoard;
