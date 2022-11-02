import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defined'
})
export class DefinedPipe implements PipeTransform {
  transform<T>(value: (T|undefined)[]): T[] {
    const res: T[] = [];
    value.forEach((v) => {
      if (v) {
        res.push(v);
      }
    })
    return res;
  }
}
