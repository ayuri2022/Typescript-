var Marks = [11, 21, 51, 101, 111];
console.log("Array traversal using for loop");
var i = 0;
for (i = 0; i < Marks.length; i++) {
    console.log(Marks[i]);
}
console.log("Array traversal using while loop");
i = 0;
while (i < Marks.length) {
    console.log(Marks[i]);
    i++;
}
console.log("Array traversal using Do - while loop");
i = 0;
do {
    console.log(Marks[i]);
    i++;
} while (i < Marks.length);
