import Grid from "./grid.js";

console.log("Opret et tomt grid");
const myGrid = new Grid(5, 3);
myGrid.printGrid();

console.log("Put data i griddet");
myGrid.set({ row: 0, col: 0 }, "A");
myGrid.set({ row: 0, col: 1 }, "B");
myGrid.set({ row: 0, col: 2 }, "C");
myGrid.set({ row: 1, col: 0 }, "D");
myGrid.set({ row: 1, col: 1 }, "E");
myGrid.set({ row: 1, col: 2 }, "F");
myGrid.set({ row: 2, col: 0 }, "G");
myGrid.set({ row: 2, col: 1 }, "H");
myGrid.set({ row: 2, col: 2 }, "I");
myGrid.set({ row: 3, col: 0 }, "J");
myGrid.set({ row: 3, col: 1 }, "K");
myGrid.set({ row: 3, col: 2 }, "L");
myGrid.set({ row: 4, col: 0 }, "M");
myGrid.set({ row: 4, col: 1 }, "N");
myGrid.set({ row: 4, col: 2 }, "O");
myGrid.printGrid();

console.log(myGrid.neighbours({ row: 2, col: 1 }));
console.log(myGrid.neighbourValues({ row: 2, col: 1 }));
