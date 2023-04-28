import { IMAGE_CONFIG } from '@angular/common';
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'marvlouschk'
})
export class MarvlouschkPipe implements PipeTransform 
{

  transform(value: any, ...args: unknown[]): any
  {
      if(args[0]=='Prime')
      {
        for(let i = 2; i < value;i++){
          if(value % i === 0)
          return "notPrime";
          return "prime";
        }
      }
      else if(args[0]=='Perfect')
      {
        var sum=0
        for (var i = 1; i < value; i++) 
        {
          if (value % i == 0)
           {
            sum += i;
          }
        }

        if (sum == value) 
        {
          return "Perfect no";
        }
        return "NotPerfect";
      }
      else if(args[0]=='Even')
      {
        if(value % 2 == 0) 
        {
         return "Even no"
        }
        }
       else if(args[0]=='Odd') 
       {
        if(value%2!=0)

        return "Odd no"
    }
    
  }
}

