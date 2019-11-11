import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'dataFilter'
})
export class DataFilterPipe implements PipeTransform {

  transform(array: any[], query: string): any {
    if (query) {
      const arrayOutput: any[] = new Array();
      for (const obj of array) {
        for (const key in obj) {
          if (obj[key]) {
            const val = String(obj[key]).toLowerCase();
            if (val.includes(query.toLowerCase())) {
              arrayOutput.push(obj);
            }
          }
        }
      }
      return arrayOutput;
    }
    return array;
  }
}
