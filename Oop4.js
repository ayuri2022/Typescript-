var Demo1 = /** @class */ (function () {
    //perameterised constructor
    function Demo1(A, B) {
        //console.log("inside default constructor");
        this.No1 = A;
        this.No2 = B;
    }
    //Behaviour
    Demo1.prototype.Display = function () {
        console.log("inside display function of Demo class");
    };
    return Demo1;
}());
var obj1 = new Demo1(10, 11);
//var obj2 =new Demo1(20,21);
console.log(obj1.No1);
console.log(obj1.No2);
var obj = new Demo1(10, 20);
obj.Display();
var obj2 = new Demo1(20, 21);
console.log(obj2.No1);
console.log(obj2.No2);
