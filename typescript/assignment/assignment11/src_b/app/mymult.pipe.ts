import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mymult'
})
export class MymultPipe implements PipeTransform {

  transform(value:any, ...args: any[]): any
   {
    var no1=value;
    return no1*args[0];
  }

}
