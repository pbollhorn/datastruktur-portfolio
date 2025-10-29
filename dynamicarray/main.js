import DynamicArray from "./dynamicarray.js";

let da = new DynamicArray();

console.log(da.get(0));
da.add("hest");
da.add("giraf");
da.add("hund");
da.add("kat");
da.add("krokodille");
da.add("høne");
da.add("bænkebidder");
da.add("rotte");

console.log(da.size());
console.log(da.capacity());
console.log(da.get(0));
console.log(da.get(1));
console.log(da.get(2));
console.log(da.capacity());