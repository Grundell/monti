import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekday'
})
export class WeekdayPipe implements PipeTransform {

   weekdays = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

  transform(value: any, args?: any): any {
  
    let dayOfWeek = new Date(value).getDay();
    return this.weekdays[dayOfWeek];

  }

}
