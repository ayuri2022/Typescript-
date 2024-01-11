function DisplayTime(Division) {
    if (Division == "A") {
        console.log("your exam at 7 am");
    }
    else if (Division == "B") {
        console.log("your exam at 8 am");
    }
    else if (Division == "C") {
        console.log("your exam at 9 am");
    }
    else if (Division == "D") {
        console.log("your exam at  10 am");
    }
    else {
        console.log("wrong input,it should be either A,B,C,D");
    }
}
var Value = "C";
DisplayTime(Value);
