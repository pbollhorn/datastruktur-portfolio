import DynamicArray from "./dynamicarray.js";

console.log("Opret et array med plads til fem elementer");
const da = new DynamicArray(5);
da.printList();

console.log("Tilføjer tre elementer");
da.add("Harry Potter");
da.add("Ronald Weasley");
da.add("Hermione Granger");
da.printList();

console.log("Og tilføjer tre mere - og overstiger dermed antallet af pladser");
da.add("Neville Longbottom");
da.add("Fred Weasley");
da.add("George Weasley");
da.printList();

console.log("Indsætter Cho Chang i listen mellem Harry og Ron");
da.insert(1, "Cho Chang");
da.printList();

console.log("Erstatter Cho Chang med Ginny Weasley, og sletter element 5");
da.set(1, "Ginny Weasley");
da.remove(5);
da.printList();
