import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'weekday'
})
export class WeekdayPipe implements PipeTransform {

   weekdays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];

  transform(value: any, args?: any): any {
    
    console.log('value', value);
    let dayOfWeek = new Date(value).getDay();

    return this.weekdays[dayOfWeek];

  }

}
