import Board from '../src/modules/gameBoard';
import Display from '../src/modules/display';

jest.mock('../src/modules/display');
Display.updateGameBoard = jest.fn();

describe('Board', () => {
  const gameArray = [
    '', '', '',
    '', '', '',
    '', '', '',
  ];

  test('To get an array of 9 elements', () => {
    expect(Board.getGameArray()).toEqual(gameArray);
  });

  test('Will be empty. No characters inside.', () => {
    expect((gameArray.filter((v) => v.length > 0)).length).toEqual(0);
  });

  test('Will update array at correct positions.', () => {
    Board.updateGameArray(0, 'X');
    Board.updateGameArray(1, 'O');
    expect(Board.getGameArray()[0]).toEqual('X');
    expect(Board.getGameArray()[1]).toEqual('O');
  });

  test('Will not incorrectly report placed elements', () => {
    Board.updateGameArray(0, 'X');
    Board.updateGameArray(1, 'O');
    expect(Board.getGameArray()[0]).not.toEqual('Z');
    expect(Board.getGameArray()[1]).not.toEqual('B');
  });

  test('Will reset the board correctly', () => {
    Board.updateGameArray(0, 'X');
    Board.updateGameArray(1, 'O');
    Board.updateGameArray(2, 'X');
    Board.updateGameArray(3, 'O');
    Board.updateGameArray(4, 'X');
    Board.resetBoard();
    expect(Board.getGameArray()).toEqual(gameArray);
  });

  test(('Will not allow second entry on an already filled spot'), () => {
    Board.updateGameArray(0, 'X');
    expect(Board.validateMove(0)).toEqual(true);
  });
});
