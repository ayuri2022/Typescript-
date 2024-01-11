function Percentage(Marks, OutOf) {
    if (OutOf === void 0) { OutOf = 100; }
    var Result = 0;
    Result = ((Marks / OutOf) * 100);
    return Result;
}
var Ans = 0;
Ans = Percentage(89, 200);
console.log("Percentageis :" + Ans);
Ans = Percentage(89);
console.log("Percentageis :" + Ans);
