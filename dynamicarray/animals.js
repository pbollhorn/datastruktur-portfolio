import DynamicArray from "./dynamicarray.js";

let da = new DynamicArray();

da.add("hest");
da.add("giraf");
da.add("hund");
da.add("kat");
da.print();

da.insert(4,"aligator");
da.print();