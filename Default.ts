function Percentage(Marks:number,OutOf:number=100):number
{
   
    var Result : number =0;
    Result =((Marks/OutOf)*100);
    return Result;
}

var Ans : number =0;

Ans=Percentage(89,200);

console.log("Percentageis :"+Ans);

Ans=Percentage(89);

console.log("Percentageis :"+Ans);