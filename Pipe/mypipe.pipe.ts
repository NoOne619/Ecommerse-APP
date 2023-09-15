import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mypipe'
})
export class MyPipe implements PipeTransform {

  transform(value: [], ...args: unknown[]): any{
    

  
  value.sort((a:any,b:any)=> a.price - b.price);
    return value;
  }

}
