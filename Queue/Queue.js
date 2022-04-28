const SSL = require("../SSL/SSL");

class Queue{
    constructor(){
        this.list = new SSL();
    }

    enqueue(data){
        this.list.add(data);
    }

    dequeue(){
        this.list.deleteAt(0);
    }

    peek(){
        this.list.peek();
    }

    display(){
        this.list.display();
    }
}

module.exports = Queue;