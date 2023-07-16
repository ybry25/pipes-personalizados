import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'contrasena',
})
export class ContrasenaPipe implements PipeTransform {
  transform(value: string, activar: boolean = false): string {
    //   let pivote = '';
    //   if (activar) {
    //     for (let index = 0; index < value.length; index++) {
    //       pivote += '*';
    //     }
    //     value = pivote;
    //   }
    //   return value;
    // }
    return activar ? '*'.repeat(value.length) : value;
  }
}
