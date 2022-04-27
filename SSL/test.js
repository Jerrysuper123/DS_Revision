const SSL = require("./SSL");

let list = new SSL();
list.add(0);
list.add(1);
list.add(2);
list.add(3);
list.display();
console.log(list.length());

console.log("-----insert")
// list.insertAt(0, "in")
list.insertAt(3,"in")
list.display();