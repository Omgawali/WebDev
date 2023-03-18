/*
   write a typescript program which contains one function named as ChkPrime .
   That function should accept one number and should return true if the given number is prime and otherwise return false
    
   ip 11
   op it is prime no
*/
/*
function PRIME(num1:number):void
{
    for(var i=2;i<num1;i++)
    {
        if(num1 % i == 0)
        {
           console.log(num1+" Number is not PRIME");
           return;
        }
    }

    console.log(num1+" Number is PRIME");
}

PRIME(11);


*/
function PRIME(num1) {
    for (var i = 2; i < num1; i++) {
        if (num1 % i == 0) {
            return false;
        }
    }
    return true;
}
var num1 = 11;
var ans = PRIME(num1);
if (ans == false) {
    console.log(num1 + " Number is not PRIME");
}
else {
    console.log(num1 + " Number is PRIME");
}
