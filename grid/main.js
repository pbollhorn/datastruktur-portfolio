import Grid from "./grid.js";

console.log("Opret et grid");
const myGrid = new Grid(5, 10);

for (let i = 0; i < myGrid.array.length; i++) {
  console.log(myGrid[i]);
}
