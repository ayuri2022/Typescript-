;function DisplayTime(Division:string):void
{
    switch(Division)
    {
        case "A" :
        {
            console.log("your exam at 7 am");
            break;
        }
        case "B":
        {
            console.log("your exam at 8 am");
            break;
        }
        case "C":
        {
            console.log("your exam at 9 am");
            break;
        }   
        case "D" :
        {
            console.log("your exam at  10 am");
            break;
        }
        

        default:
        {
            console.log("wrong input,it should be either A,B,C,D");
        }
        }
    }
    


       var Value :string ="D";
       DisplayTime(Value);


    
