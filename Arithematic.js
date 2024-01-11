var Arithematic = /** @class */ (function () {
    function Arithematic(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithematic.prototype.Addition = function () {
        var Ans;
        Ans = this.No1 + this.No2;
        return Ans;
    };
    Arithematic.prototype.Substrction = function () {
        var Ans;
        Ans = this.No1 - this.No2;
        return Ans;
    };
    return Arithematic;
}());
var obj1 = new Arithematic(11, 10);
var obj2 = new Arithematic(21, 25);
var Result;
Result = obj1.Addition();
console.log(Result);
Result = obj2.Substrction();
console.log(Result);
