import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'myadd'
})
export class MyaddPipe implements PipeTransform {

  transform(value:any, ...args: any[]): any
  {
    var no: number=value;

    return no + args[0];
  }

}
