import Logic from '../src/modules/gameLogic';

describe('Player', () => {
  const winCombo1gameArray = [
    '', '', 'X',
    '', 'X', '',
    'X', '', '',
  ];

  const winCombo2gameArray = [
    '', '', 'O',
    '', '', 'O',
    '', '', 'O',
  ];

  const winCombo3gameArray = [
    'X', 'X', 'X',
    'O', '', 'O',
    '', '', 'O',
  ];

  const drawArray = [
    'X', 'X', 'O',
    'O', 'O', 'X',
    'X', 'X', 'O',
  ];

  test('To get win on diagonal.', () => {
    expect(Logic.checkWinner('X', winCombo1gameArray)).toBe(true);
  });

  test('To get win on vertical.', () => {
    expect(Logic.checkWinner('O', winCombo2gameArray)).toBe(true);
  });

  test('To get win on horizontal.', () => {
    expect(Logic.checkWinner('X', winCombo3gameArray)).toBe(true);
  });

  test('To get a draw accurately.', () => {
    expect(Logic.checkDraw(drawArray)).toBe(true);
  });
});
