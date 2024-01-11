var Demo = /** @class */ (function () {
    function Demo() {
    }
    //Behaviour
    Demo.prototype.Display = function () {
        console.log("inside display function");
    };
    return Demo;
}());
var obj = new Demo();
obj.Display();
