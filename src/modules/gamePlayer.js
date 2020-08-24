const gamePlayer = (playerName, playerSymbol) => {
  const getName = () => playerName;
  const getSymbol = () => playerSymbol;
  return { getName, getSymbol };
};
export default gamePlayer;