const Node = require("./Node")
class SSL{
  constructor(){
    this.head = null;
  }

  add(data){
    let newNode = new Node(data);
    if(this.head===null){
      this.head = newNode;
    } else {
        //traverse to last one
        let current = this.head;
        while(current.next!==null){
            current=current.next;
        }
        current.next = newNode;
    }
  }
  
  display(){
      let current = this.head;
      console.log(current.data);
      while(current.next!==null){
          current = current.next;
          console.log(current.data);
      }
  }
  length(){
      let current = this.head;
      let count = 1;
      while(current.next!==null){
          current = current.next;
          count++;
      }
      return count;
  }

  getAt(index){
      let current = this.head;
      if(index===0){
          console.log(current.data);
      } else {
        for(let i=1; i<=index; i++){
            current = current.next;
          }
        console.log(current.data)
      }
  }

  deleteAt(index){
    let current = this.head;
    let length = this.length();
    if(index <0 || index>=length){
      return;
    }
    if(index===0){
      this.head = current.next;
      current.next = null;
    } else {
      for(let i=0; i<index-1; i++){
        current = current.next;
      }
      // return current;
      current.next = current.next.next;
    }
  }

  setAt(index, data){
    let current = this.head;
    let length = this.length();
    if(index <0 || index>=length){
      return;
    }

    if(index===0){
      current.data = data;
    } else {
      for(let i=0; i<index; i++){
        current = current.next;
      }
      current.data = data;
    }

  }

  insertAt(index,data){
    let newNode = new Node(data);
    let current = this.head;
    if(index===0){
      this.head = newNode;
      newNode.next = current;
    } else {
      for(let i=0; i<index-1; i++){
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }
}

module.exports = SSL;