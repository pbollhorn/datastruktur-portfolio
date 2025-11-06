import Grid from "./grid.js";

console.log("Opret et grid");
const myGrid = new Grid(5, 3);
myGrid.printArray();
console.log();
console.log(myGrid.get({ row: 2, col: 1 }));
myGrid.printGrid(3);