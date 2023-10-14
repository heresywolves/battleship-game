import GameBoard from './GameBoard';

const uiController = (() => {
  const boardSize = 10;

  function drawBoard(board, mode) {
    let side;
    if (mode === 'left') {
      side = document.querySelector('.left-side');
    } else {
      side = document.querySelector('.right-side');
    }
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

  function clearBoard(mode) {
    let squares;
    let text;
    if (mode === 'left') {
      squares = document.querySelectorAll('.left-side div.square');
      text = document.querySelectorAll('.left-side p');
    } else {
      squares = document.querySelectorAll('.right-side div.square');
      text = document.querySelectorAll('.right-side p');
    }
    squares.forEach((sqaure) => sqaure.remove());
    text.forEach((p) => p.remove());
  }

  return { drawBoard, clearBoard };
})();

export default uiController;
