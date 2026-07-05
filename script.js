const board = document.querySelector("#board");

const blocks = [];
const snake = [
  { x: 1, y: 3 },
  { x: 1, y: 4 },
  { x: 1, y: 5 },
];

let direction = "left";

const nCol = Math.floor(board.clientHeight / 50);
const nRows = Math.floor(board.clientWidth / 50);

for (let x = 0; x < nCol; x++) {
  for (let y = 0; y < nRows; y++) {
    const div = document.createElement("div");
    div.classList.add("block");
    board.appendChild(div);
    div.innerText = `${x},${y}`;
    blocks[`${x},${y}`] = div;
  }
}

function render() {
  snake.forEach((segment) => {
    blocks[`${segment.x},${segment.y}`].classList.add("fill");
  });
}

// setInterval(() => {
//   let head = null;
//   if (direction === "left") {
//     head = { x: snake[0].x, y: snake[0].y - 1 };
//   }
//   snake.unshift(head);
//   snake.forEach((segment) => {
//     blocks[`${segment.x},${segment.y}`].classList.remove("fill");
//   });
//   snake.pop();
//   render();
// }, 1000);
