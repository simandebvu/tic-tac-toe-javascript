import Player from '../src/modules/gamePlayer';

describe('Player', () => {
  let playerX;
  let playerO;
  beforeEach(() => {
    playerX = Player('Fry', 'X');
    playerO = Player('Bender', 'O');
  });
  test('To get the correct player name.', () => {
    expect(playerX.getName()).toEqual('Fry');
  });
  test('To show if incorrect symbol.', () => {
    expect(playerO.getSymbol()).not.toEqual('X');
  });
});
