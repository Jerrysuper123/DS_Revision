const Queue = require("../Queue/Queue");

const Q = new Queue();
Q.enqueue(0);
Q.enqueue(1);
Q.enqueue(2);
Q.display();
console.log("....after poping")
Q.dequeue();
Q.display();