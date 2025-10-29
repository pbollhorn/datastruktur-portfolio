import DynamicArray from "./dynamicarray.js";

let da = new DynamicArray();
// da.print();

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
// da.print();

da.add("aligator");
da.print();

da.insert(4, "øgle");
da.print();
da.remove(4);
da.print();

console.log(da.get(10));
console.log(da.get(0));


let db = new DynamicArray(1);
db.print();
db.add("bøffel");
db.print();
db.add("løve");
db.print();
db.add("søløve");
db.print();