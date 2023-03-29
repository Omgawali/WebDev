var Arithmetic1 = /** @class */ (function () {
    function Arithmetic1(A, B) {
        this.No1 = A;
        this.No2 = B;
    }
    Arithmetic1.prototype.Add = function () {
        return this.No1 + this.No2;
    };
    Arithmetic1.prototype.Subtract = function () {
        return this.No1 - this.No2;
    };
    Arithmetic1.prototype.Multio = function () {
        return this.No1 * this.No2;
    };
    return Arithmetic1;
}());
//var obhj1=new Arithmetic1(11,10)
//var obhj1=new Arithmetic1(21,15)
var obhj3 = new Arithmetic1(51, 101);
var Ret = 0;
Ret = obhj3.Add();
console.log(":" + Ret);
Ret = obhj3.Subtract();
console.log(":" + Ret);
Ret = obhj3.Multio();
console.log(":" + Ret);
