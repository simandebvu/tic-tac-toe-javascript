const appDisplay = (() => {
  const updateGameBoard = (index, value) => {
    const cellDivs = document.querySelectorAll('.game-cell');
    cellDivs[index].innerHTML = value;
  };

  const loadBlankBoard = () => {
    const cellDivs = document.querySelectorAll('.game-cell');
    cellDivs.forEach(cellDiv => { cellDiv.innerHTML = null; });
  };


  return { updateGameBoard, loadBlankBoard };
})();

export default appDisplay;