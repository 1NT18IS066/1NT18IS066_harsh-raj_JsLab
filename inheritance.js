class bakery{
    constructor(name){
       this.name = name;
    }
    static meth(){
        console.log("Generic bakery");
    }
    items(){
        console.log("Generic items");
    }
}

class section extends bakery{
    constructor(){
        super("Nmit");
    }
    items(i_name,quantity){
        this.i_name = i_name;
        this.quantity = quantity;
    }

}
class Cake extends section{
    constructor(){
        this.section = "cake";
    }
    typeOfCake(i_name,quantity){
        this.items(i_name,quantity);
        
    }
    
}

let ob = new bakery("Nmit");
console.log(ob);
bakery.meth();

let ob1 = new section();
console.log (ob1.name);
ob1.items("Cake",5);
console.log(ob1.i_name+" "+ob1.quantity);
