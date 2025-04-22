import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'pipeExample'
})
export class PipeExamplePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    return value.split('').reverse().join('');
  }

}

