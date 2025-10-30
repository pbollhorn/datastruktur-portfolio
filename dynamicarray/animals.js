import DynamicArray from "./dynamicarray.js";

let da = new DynamicArray();

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
da.print();


da.insert(9,"aligator");
da.print();