const gameBoard = (() => {
  const gameArray = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];
  const getGameArray = () => gameArray;

  const restartBtn = () => {
    while (gameArray.length > 0) {
      gameArray.pop();
    }
  };

  const renderGameBoard = () => {
    console.log(gameArray);
    const cellDivs = document.querySelectorAll('.game-cell');
    gameArray.forEach(item => {
      if (item.length > 0) {
        cellDivs[gameArray.indexOf(item)].innerHTML = item;
      }
    });
  };

  const updateGameArray = (index, value) => {
    console.log(gameArray);
    if (gameArray[index].trim.length >= 0) {
      gameArray[index] = value;
      renderGameBoard();
    } else {
      console.log(gameArray[index].trim.length);
      // alert('Index already occupied with a value');
    }
  };

  return {
    restartBtn,
    getGameArray,
    renderGameBoard,
    updateGameArray,
  };

})();
export default gameBoard;
