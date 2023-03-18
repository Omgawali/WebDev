/*
Write a typescript program which conatins one function named area.
That function calculate area of circle
accept value of radius from user and return its area
Default calue of PI should be 3.14 if it not provided by the caller

ip 5
op area ogf circle is 78.5
*/
function AreaofC(PI, radius) {
    if (PI === void 0) { PI = 3.14; }
    return radius * radius * PI;
}
var PI = 3.14;
var radius = 5;
var op = AreaofC(PI, radius);
console.log("Area of circle" + op);
