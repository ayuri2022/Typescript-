var Demo = /** @class */ (function () {
    //Default constructor
    function Demo() {
        console.log("inside default constructor");
        this.No1 = 0;
        this.No2 = 0;
    }
    //Behaviour
    Demo.prototype.Display = function () {
        console.log("inside display function of Demo class");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
console.log(obj.No1);
console.log(obj.No2);
