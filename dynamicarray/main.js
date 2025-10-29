import { DynamicArray } from "./dynamicarray.js";

let da = new DynamicArray();

console.log(da.get(0));
da.add("hest");

console.log(da.size());
console.log(da.capacity());
console.log(da.get(0));
