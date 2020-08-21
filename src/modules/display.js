const appDisplay = (() => {
  const updateGameBoard = (index, value) => {
    const cellDivs = document.querySelectorAll('.game-cell');
    cellDivs[index].classList.remove('clickable');
    cellDivs[index].classList.add('not-clickable');
    cellDivs[index].innerHTML = value;
  };

  const loadBlankBoard = () => {
    const cellDivs = document.querySelectorAll('.game-cell');
    cellDivs.forEach(cellDiv => { cellDiv.innerHTML = null; });
  };

  const insertUsernameModal = () => {
    const body = document.querySelector('.container');
    const modalDiv = document.createElement('div');
    modalDiv.classList.add('modal-container');
    modalDiv.classList.add('modal');
    const modalContentDiv = document.createElement('div');
    modalContentDiv.classList.add('modal-content');


    const modalForm = document.createElement('form');
    modalForm.classList.add('form-game-input');
    const inputPlayer1 = document.createElement('input');
    inputPlayer1.setAttribute('type', 'text');
    inputPlayer1.setAttribute('placeholder', 'Player 1\'s name - Using X');
    inputPlayer1.classList.add('name-input');
    inputPlayer1.required = true;
    inputPlayer1.setAttribute('id', 'player1');
    inputPlayer1.setAttribute('name', 'player1');
    inputPlayer1.setAttribute('minlength', 2);
    inputPlayer1.setAttribute('maxlength', 10);
    modalForm.appendChild(inputPlayer1);
    const inputPlayer2 = document.createElement('input');
    inputPlayer2.setAttribute('type', 'text');
    inputPlayer2.setAttribute('placeholder', 'Player 2\'s name - Using O');
    inputPlayer2.classList.add('name-input');
    inputPlayer2.required = true;
    inputPlayer2.setAttribute('id', 'player2');
    inputPlayer2.setAttribute('name', 'player2');
    inputPlayer2.setAttribute('minlength', 2);
    inputPlayer2.setAttribute('maxlength', 10);
    modalForm.appendChild(inputPlayer2);
    const modalSubmit = document.createElement('input');
    modalSubmit.setAttribute('type', 'submit');
    modalSubmit.classList.add('name-submit-button');
    modalForm.appendChild(modalSubmit);
    modalContentDiv.appendChild(modalForm);
    modalDiv.appendChild(modalContentDiv);
    body.appendChild(modalDiv);
    return modalForm;
  };

  const showPlayerModal = () => {
    const form = insertUsernameModal();
    const modal = document.querySelector('.modal');
    modal.classList.toggle('show-modal');
    return form;
  };

  const showWinner = (message) => {
    const body = document.querySelector('body');
    const containerDiv = document.querySelector('.winning-message');
    containerDiv.innerHTML = null;
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('winning-message-text');
    messageDiv.innerHTML = message;
    containerDiv.appendChild(messageDiv);
    const button = document.createElement('button');
    button.classList.add('btn-win-reset');
    button.textContent = 'Okay! Restart the game please !';

    containerDiv.appendChild(button);
    containerDiv.classList.toggle('show');

    body.appendChild(containerDiv);
  };

  const showCurrentPlayer = (message) => {
    const nameDiv = document.querySelector('.current-player');
    nameDiv.innerHTML = null;
    const nameText = document.createElement('h1');
    nameText.innerHTML = message;
    nameDiv.appendChild(nameText);
  };


  return {
    updateGameBoard, loadBlankBoard, showPlayerModal, showCurrentPlayer, showWinner,
  };
})();

export default appDisplay;
