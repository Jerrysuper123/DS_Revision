const Graph = require("./graph");

const g = new Graph();
g.addNode("A");
g.addNode("B");
g.addNode("C");
g.addNode("D");
g.addNode("E");
g.addNode("F");

g.addNeighbour("A","B");
g.addNeighbour("A","C");
g.addNeighbour("B","D");
g.addNeighbour("C","E");
g.addNeighbour("D","E");
g.addNeighbour("D","F");
g.addNeighbour("E","F");


console.log(g);
console.log(g.dfs("A"));
console.log(g.bfs("A"));
