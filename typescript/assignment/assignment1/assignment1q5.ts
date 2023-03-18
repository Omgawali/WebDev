/*
Write a typescript program which contains one function named as fibonacci that function accept one number from user and print fibonacci series till that number

ip 21
op 1 1 2 3 5 8 13 21
*/


function fibonacci(count)
{
    var n1=0,n2=1,n3
console.log(" "+n2);


for(var i=2;i<count;++i)
{    
 n3=n1+n2;    
 console.log(" "+n3);    
 console.log(" "+n3);    
 n1=n2;    
 n2=n3;    
}    
}



var count=10;  
fibonacci(count)