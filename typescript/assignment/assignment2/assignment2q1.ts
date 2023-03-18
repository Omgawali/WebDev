/*
Write a program which contains one function named as maximum 
That function accepts array of numbers and returns the largest number from array

ip 23 89 6 29 56 45 77 32
op Maximum no is 89 
*/



function Maximum(brr)
{
var iCnt=arr[0]
for(var i=0;i<arr.length;i++)
{
    if(iCnt<arr[i])
    {
        iCnt=arr[i]
        
    }
}
return iCnt
}

var arr=[23,89,6,29,56,45,77,32]
var ans=Maximum(arr)
console.log("Maximum no is "+ans)