import { Pipe, PipeTransform } from '@angular/core';

import * as moment from 'moment';

@Pipe({
  name: 'dateFormatter'
})
export class DateFormatterPipe implements PipeTransform {

  transform(value: any, arg?: any): any {
    if (arg && value) {
      return moment(value).utcOffset('+0800').format(arg).toLowerCase() == 'Invalid date'.toLowerCase() ? value : moment(value).utcOffset('+0800').format(arg);
    } else {
      return value;
    }
  }

}
