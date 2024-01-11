function Demo() {
    var Languages = ["c", "c++", "java", "typescript"];
    return Languages;
}
var Arr;
Arr = Demo();
console.log("Elements of array are :");
var i = 0;
for (i = 0; i < Arr.length; i++) {
    console.log(Arr[i]);
}
