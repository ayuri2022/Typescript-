

function Percentage(Marks:number,OutOf:number):number
{
   
    var Result : number =0;
    Result =((Marks/OutOf)*100);
    return Result;
}

var Ans : number =0;

Ans=Percentage(77,100);

console.log("Percentageis :"+Ans);