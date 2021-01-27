import { Pipe, PipeTransform } from '@angular/core';

var VMasker = require('vanilla-masker');

export const CPF_MASK = '999.999.999-99'
export const CNPJ_MASK = '99.999.999/9999-99'

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {

  transform(value: string, format?: string): string {
    if ( format ) {
      return VMasker.toPattern(value, format)
    } else {
      return VMasker.toPattern(value, (value.trim().length > 11 ? CNPJ_MASK : CPF_MASK) )
    }
  }
}
