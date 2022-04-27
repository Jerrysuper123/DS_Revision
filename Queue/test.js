const Queue = require("../Queue/Queue");

const Q = new Queue();
Q.push(0);
Q.push(1);
Q.push(2);
Q.display();
console.log("....after poping")
Q.pop();
Q.display();