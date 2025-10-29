import DynamicArray from "./dynamicarray.js";

let da = new DynamicArray();

console.log("size: " + da.size());
console.log("capacity :" + da.capacity());
da.add("hest");
da.add("giraf");
da.add("hund");
da.add("kat");
da.add("krokodille");
da.add("høne");
da.add("bænkebidder");
da.add("rotte");
da.add("mus");
da.add("gråspurv");
console.log("size: " + da.size());
console.log("capacity :" + da.capacity());

da.add("aligator");

console.log("size: " + da.size());
console.log("capacity :" + da.capacity());
