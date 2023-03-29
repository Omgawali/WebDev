
class circle {

    radius : number
    PI : number
    constructor(Data) {
        this.radius=Data
        this.PI=3.14
    }

   

}
class circleX extends circle
{
    constructor(data : number)
    {
        super(data)
    }

    CalcCircum()
    {
        let Ans=0
        Ans=2*this.PI*this.radius
        return Ans
    }
}
var obhj=new circleX(10.7)
var ret 


ret=obhj.CalcCircum()
console.log("Area is"+ret)