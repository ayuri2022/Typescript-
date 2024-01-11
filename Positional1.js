function Percentage(Marks, OutOf) {
    var Result = 0;
    Result = ((Marks / OutOf) * 100);
    return Result;
}
var Ans = 0;
Ans = Percentage(77, 100);
console.log("Percentageis :" + Ans);
