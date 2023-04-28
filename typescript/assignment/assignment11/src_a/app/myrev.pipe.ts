import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'myrev'
})
export class MyrevPipe implements PipeTransform {

  transform(value: any, ...args: any[]) 
  {
    let str: string= value;

    let reverseString: string= " ";

    for (let char of str) 
    {
   reverseString = char + reverseString;
    }
     console.log("The original string is " + str);
     console.log("The reversed string is " + reverseString)

    return reverseString;
  }
   
  

}
