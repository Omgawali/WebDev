/*
Write a typescript program which conatins one function named area.
That function calculate area of circle 
accept value of radius from user and return its area 
Default calue of PI should be 3.14 if it not provided by the caller

ip 5
op area of circle is 78.5
*/
function AreaofC(PI:number=3.14,radius:number):number
{
     return radius*radius*PI;
}

var PI : number =3.14
var radius : number =5
var op=AreaofC(PI,radius)
console.log("Area of circle"+op)