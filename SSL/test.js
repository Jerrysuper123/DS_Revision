const SSL = require("./SSL");

let list = new SSL();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.display();
console.log(list.length());
console.log(list.getAt(2));