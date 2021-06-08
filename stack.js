class stack{
    constructor(){
        this.arr = new Array();
    }
    log(data){
        console.log(data);
    }
    push(elem){
        this.arr.push(elem);
    }
    pop(){
        this.arr.pop();
    }
    top(){
        this.log(this.arr.slice(-1)[0]);
    }
    isEmpty(){
        if(this.arr.length <= 0){
            this.log('empty stack');
        }
    }
    display(){
        for(let e of this.arr){
            this.log(e);
        }
    }
};

const s = new stack();
s.push(10);
s.push(20);
s.push(30);
s.push(40);
s.display();
// s.pop();
s.top();