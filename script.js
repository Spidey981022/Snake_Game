const board = document.querySelector("#board");

const blocks = [];
const snake = [{ x: 1, y: 3 }];

let direction = "";

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

setInterval(() => {
  let head = null;

  if (direction === "right") {
    head = { x: snake[0].x, y: snake[0].y + 1 };
  } else if (direction === "left") {
    head = { x: snake[0].x, y: snake[0].y - 1 };
  } else if (direction === "up") {
    head = { x: snake[0].x - 1, y: snake[0].y };
  } else if (direction === "down") {
    head = { x: snake[0].x + 1, y: snake[0].y };
  } else {
    head = { x: snake[0].x, y: snake[0].y };
  }

  snake.unshift(head);
  snake.forEach((segment) => {
    blocks[`${segment.x},${segment.y}`].classList.remove("fill");
  });
  snake.pop();
  render();
}, 100);

document.addEventListener("keydown", (event) => {
  if (event.keyCode === 37) {
    direction = "left";
  } else if (event.keyCode === 38) {
    direction = "up";
  } else if (event.keyCode === 39) {
    direction = "right";
  } else if (event.keyCode === 40) {
    direction = "down";
  } else if (event.keyCode === 32) {
    direction = "";
  }
});
