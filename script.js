const board = document.querySelector("#board");
// const block = document.querySelector(".block");

const block = [];

const heightBlock = Math.floor(board.clientHeight / 50);
const widthBlock = Math.floor(board.clientWidth / 50);

const nBlock = heightBlock * widthBlock;
console.log(nBlock);

// for (let i = 0; i < nBlock; i++) {
//   const div = document.createElement("div");
//   div.classList.add("block");
//   board.appendChild(div);
// }

for (let x = 0; x < widthBlock; x++) {
  for (let y = 0; y < heightBlock; y++) {
    const div = document.createElement("div");
    div.classList.add("block");
    board.appendChild(div);
    div.innerText = `(${x},${y})`;
  }
}
