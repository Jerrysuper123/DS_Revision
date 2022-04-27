const SSL = require("../SSL/SSL");

class Queue{
    constructor(){
        this.list = new SSL();
    }

    push(data){
        this.list.add(data);
    }

    pop(){
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