import DynamicArray from "./dynamicarray.js";

// let da = new DynamicArray();
// da.add("hest");
// da.add("giraf");
// da.add("hund");
// da.add("kat");
// da.print();

// da.insert(4,"aligator");
// da.print();

let db = new DynamicArray(4);
db.add("a");
db.add("b");
db.add("c");
db.add("d");
db.add("e");
db.add("f");
db.print();

db.insert(3, "x");
db.print();
