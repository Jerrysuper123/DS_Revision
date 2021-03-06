const SSL = require("../SSL/SSL");

class Stack{
    constructor(){
        this.list = new SSL();
    }

    push(data){
        this.list.insertAt(data,0);
    }

    pop(){
        this.list.deleteAt(0);
    }

    peek(){
        this.list.getAt(0)
    }

    display(){
        this.list.display();
    }
}

module.exports = Stack;
