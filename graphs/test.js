const Graph = require("./graph");

const G = new Graph();

G.addNode("Dallas");
G.addNode("Tokyo");
G.addNode("HK");
G.addNeighbour("Dallas","HK");
console.log(G);
G.removeNode("Dallas");
console.log(G);