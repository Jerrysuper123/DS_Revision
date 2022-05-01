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
        //each node is a key array pair
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

    // dfs(startNode){

    //     //3 level of funnels
    //     //1. mark visited
    //     //2. put into stack
    //     //3. put into result

    //     //using stack to keep track of orders, FIFO, that is why it is depth first search
    //       //{A: true, B: true} - means visited (using object, faster tracking)
    //     const visited = [];
    //     visited[startNode] = true;

    //     const stack = [startNode];
    //     //to return later
    //     const result = [];
      
    //     let currentNode;
    //     //as long as there is something in the stack
    //     while(stack.length){
    //         //pop and push instantaneouly, resulting into depth first
    //         currentNode = stack.pop();
    //         result.push(currentNode);

    //         //loop each each neightbour of currentNode, mark them as visited and push into stack
    //         for(let neighbour of this.list[currentNode]){
    //             //if we have not visited
    //             if(!visited[neighbour]){
    //                 visited[neighbour] = true;
    //                 stack.push(neighbour);
    //             }
    //         }
    //     }
    //     return result;
    // }

    dfs(startNode){
        //created 3 level of funnel visited, stack, result
        //put startNode into visited and stack
        //while there is sth in the stack
        //pop up the currentNode
        //push the currentNode into result (push if from the end, pop is also from the end, resulting into FIFO)
        //for each neighbour of the currentNode
        //if we have not visted before, push them into the stack

        let visited = [];
        let stack = [];
        let result  = [];
        visited[startNode] = true;
        stack.push(startNode);

        while(stack.length){
            let currentNode = stack.pop();
            result.push(currentNode);

            for(let neighbour of this.list[currentNode]){
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    stack.push(neighbour)
                }
            }
        }

        return result;
    }

    bfs(startNode){
        //created 3 level of funnel visited, stack, result
        //put startNode into visited and stack
        //while there is sth in the stack
        //pop up the currentNode
        //push the currentNode into result (push if from the end, pop is also from the end, resulting into FIFO)
        //for each neighbour of the currentNode
        //if we have not visted before, push them into the stack

        let visited = [];
        let queue = [];
        let result  = [];
        visited[startNode] = true;
        queue.push(startNode);

        while(queue.length){
            let currentNode = queue.shift();
            result.push(currentNode);

            for(let neighbour of this.list[currentNode]){
                if(!visited[neighbour]){
                    visited[neighbour] = true;
                    queue.push(neighbour)
                }
            }
        }

        return result;
    }
}

module.exports = Graph;