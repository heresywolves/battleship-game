import GameBoard from './GameBoard';

const uiController = (() => {
  const boardSize = 10;
  const side = document.querySelector('.left-side');

  function drawBoard(board) {
    let lineCount = 1;
    let colCount = 1;
    for (let i = 0; i < boardSize * boardSize + 11; i++) {
      if (!board.board[i]) {
        const newColId = document.createElement('p');
        if (i === 100) {
          side.appendChild(newColId);
          continue;
        }
        newColId.textContent = `${colCount}`;
        colCount++;
        side.appendChild(newColId);
        continue;
      }
      const curItem = board.board[i];
      if (i % 10 === 0) {
        const newLineId = document.createElement('p');
        newLineId.textContent = `${lineCount}`;
        lineCount++;
        side.appendChild(newLineId);
      }

      const square = document.createElement('div');
      square.classList.add('square');
      square.classList.add(`${i}`);
      square.classList.add(`x:${curItem.x}`);
      square.classList.add(`y:${curItem.y}`);
      if (curItem.hasShip) {
        square.classList.add('has-ship');
      } else {
        square.classList.add('no-ship');
      }
      if (curItem.attacked) {
        square.classList.add('attaked');
      }
      side.appendChild(square);
    }
  }
  return { drawBoard };
})();

export default uiController;
