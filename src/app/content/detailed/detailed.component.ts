import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'

import * as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators'
import { UserService } from 'src/app/shared/service/user.service';
import { isPending } from 'q';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {
  weatherData$: any;
  
  constructor(
    private store: Store<fromRoot.State>,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.store.select(fromRoot.getCurrent).subscribe(
      data => {
        if(data){
          this.weatherData$ = data;
        } else {
          this.userService.singleWeather();
        }
      }
    )
  }

  addToUser(city){
    this.userService.addCityUser(city);
  }

}
