class Arithematic
{
    private No1:number;
    private No2:number;

    constructor(A:number,B:number)
    {
        this.No1=A;
        this.No2 =B;
    }
   
    Addition():number
    {
        var Ans :number;
        Ans =this.No1+this.No2;
        return Ans;
    }

    Substrction():number
    {
        var Ans :number;
        Ans =this.No1-this.No2;
        return Ans;
    }

}

var obj1 = new Arithematic(11,10);
var obj2 = new Arithematic(21,25);

console.log(obj1.No1);
console.log(obj1.No2);

var Result :number;

Result =obj1.Addition();
console.log(Result);

Result =obj2.Substrction();
console.log(Result);
