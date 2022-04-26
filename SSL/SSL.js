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
          return current;
      } else {
        for(let i=1; i<=index; i++){
            current = current.next;
          }
        return current;
      }
  }
}

module.exports = SSL;