class Demo1
{
     //Characteristis
     No1:number;
     No2:number;

     //perameterised constructor
       constructor(A :number,B:number)
       {
         //console.log("inside default constructor");
         this.No1 = A;
         this.No2 = B;
       }
     //Behaviour
     Display()
     {
        console.log("inside display function of Demo class");
     }
}

var obj1 =new Demo1(10,11);
//var obj2 =new Demo1(20,21);

console.log(obj1.No1);
console.log(obj1.No2);

var obj = new Demo1(10,20);
obj.Display();

var obj2 =new Demo1(20,21);
console.log(obj2.No1);
console.log(obj2.No2);


