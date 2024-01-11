function CheckEven(No:number):boolean
{
    if((No%2)==0)
    {
       return  true;

    }
   
   else
    {
        return false;


    }
}

var Value1 : number =11;
var Result : boolean;

Result = CheckEven(Value1);
if(Result == true)
{
    console.log("it is even");
}
else{
    console.log("it is odd");
}