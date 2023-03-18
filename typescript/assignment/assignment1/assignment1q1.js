/*Write typecript program which contains one function named as maximum
 That function accepts three parameters and it should returns largest value from three input parameters
 
 ip 23 89 6
 op Maximum number is 89
 */
function Max(a, b, c) {
    if (a > b && a > c) {
        return a;
    }
    else if (b > c) {
        return b;
    }
    else {
        return c;
    }
}
var no1 = 23;
var no2 = 89;
var no3 = 6;
var var1 = Max(no1, no2, no3);
console.log("Maximun no is" + var1);
