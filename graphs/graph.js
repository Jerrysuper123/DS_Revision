//graph is just an object
/*
{
    n1:[n2,n3],
    n2:[n1],
    n3:[n1]
}
*/

class Graph{
    constructor(){
        this.list = {}
    }

    addNode(node){
        if(!this.list[node]){
            this.list[node] = [];
        }
    }

    addNeighbour(n1,n2){
        this.list[n1].push(n2);
        this.list[n2].push(n1);
    }

    removeNeighbour(n1,n2){
        this.list[n1] = this.list[n1].filter(ne=>ne!==n2);
        this.list[n2] = this.list[n2].filter(neigbour=>neigbour!==n1);
    }

    removeNode(n1){
        //remove all neighbours
        while(this.list[n1].length){
            const neigbour = this.list[n1].pop();
            this.removeNeighbour(n1, neigbour);
        }
        //remove node
        delete this.list[n1];
    }
}

module.exports = Graph;