/*
Write a typescript program which contains one function names as Summation
That function accepts array of number and returns the summation of each number from array

ip 23 6 7 4 5 7
op Addition is 52
*/

var arr=[23,6,7,4,5,7]
var iCnt=arr[0]

for(var i=1;i<arr.length;i++)
{
    iCnt=iCnt+arr[i]
}
console.log(iCnt)