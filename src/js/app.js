/* eslint-disable no-plusplus */
import GameState from './GameState';

function randomMinMaxNot(min, max, not) {
  let result = Math.round(Math.random() * (max - min) + min);
  while (result === not) {
    result = Math.round(Math.random() * (max - min) + min);
  }
  return result;
}

function runGoblin() {
  const board = Array.from(document.querySelectorAll('.myCell'));
  const activeCell = board.find((el) => el.classList.contains('target'));
  const index = board.indexOf(activeCell);
  activeCell.classList.remove('target');
  board[randomMinMaxNot(0, 15, index)].classList.add('target');
}

document.addEventListener('DOMContentLoaded', () => {
  setInterval(() => { runGoblin(); }, 1000);
});
