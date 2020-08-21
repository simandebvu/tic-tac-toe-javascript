const appDisplay = (() => {
  const updateGameBoard = (index, value) => {
    const cellDivs = document.querySelectorAll('.game-cell');
    cellDivs[index].innerHTML = value;
  };

  const loadBlankBoard = () => {
    const cellDivs = document.querySelectorAll('.game-cell');
    cellDivs.forEach(cellDiv => { cellDiv.innerHTML = null; });
  };

  const insertUsernameModal = () => {
    const body = document.querySelector('.container');
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal');
    const modalContentDiv = document.createElement('div');
    modalContentDiv.classList.add('modal-content');
    const modalPlayer1 = document.createElement('input');
    modalPlayer1.setAttribute('type', 'text');
    const modalPlayer2 = document.createElement('input');
    modalPlayer2.setAttribute('type', 'text');
    const modalSubmit = document.createElement('input');
    modalSubmit.setAttribute('type', 'submit');
    modalContentDiv.appendChild(modalPlayer1);
    modalContentDiv.appendChild(modalPlayer2);
    modalContentDiv.appendChild(modalSubmit);
    modalDiv.appendChild(modalContentDiv);
    body.appendChild(modalDiv);
  };

  const showPlayerModal = () => {
    insertUsernameModal();
    const modal = document.querySelector('.modal');
    modal.classList.toggle('show-modal');
  };

  return { updateGameBoard, loadBlankBoard, showPlayerModal };
})();

export default appDisplay;
