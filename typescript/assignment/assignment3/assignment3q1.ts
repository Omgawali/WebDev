

class Arithmetic1
{
    //Characteristic
    public No1 : number
    public No2 : number

    public constructor(A :number,B: number)
    {
        this.No1=A
        this.No2=B

    }

    public Add()
    {
        return this.No1+this.No2
    }

    public Subtract()
    {
        return this.No1-this.No2
    }

    public Multio()
    {
        return this.No1*this.No2
    } 
}

//var obhj1=new Arithmetic1(11,10)

//var obhj1=new Arithmetic1(21,15)

var obhj3=new Arithmetic1(51,101)
var Ret : number=0

Ret=obhj3.Add()
console.log(":"+Ret)

Ret=obhj3.Subtract()
console.log(":"+Ret)

Ret=obhj3.Multio()
console.log(":"+Ret)