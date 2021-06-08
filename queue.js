class queue{
    constructor(){
        this.arr = new Array();
    }
    log(data){
        console.log(data);
    }
    enqueue(elem){
        this.log(`Inserted: ${elem}`);
        this.arr.push(elem);
    }
    dequeue(){
        const rem = this.arr.shift();
        this.log(`Removed: ${rem}`);
    }
    isEmpty(){
        if(this.arr.length>0){
            return false;
        } else {
            return true;
        }
    }
    leng(){
        this.log(`Length of Queue: ${this.arr.length}`);
    }
    head(){
        if(!this.isEmpty()){
            this.log(`Head: ${this.arr[0]}`);
        } else {
            this.log('List is Empty');
        }
    }
    tail(){
        this.log(`Tail: ${this.arr.slice(-1)[0]}`);
    }
    display(){
        this.log('Elements: ');
        if(this.isEmpty()){
            this.log('Queue is Empty');
            return;
        }
        for(let e of this.arr){
            this.log(e);
        }
    }
    clear(){
        this.log('Clearing the queue');
        this.arr.length = 0;
    }
};

const q = new queue();
q.enqueue(10);
q.enqueue(20);
q.enqueue(30);
q.enqueue(40);
q.enqueue(50);
q.dequeue();
q.display();
q.head();
q.tail();
q.leng();
q.clear();
q.display();
