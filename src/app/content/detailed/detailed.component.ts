import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store'

import * as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs';
import { UserService } from 'src/app/shared/service/user.service';

@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {
  weatherData$: Observable<any>;
  
  constructor(
    private store: Store<fromRoot.State>,
    private userService: UserService
  ) { }

  ngOnInit() {
    this.weatherData$ = this.store.select(fromRoot.getCurrent)
  }

  addToUser(city){
    this.userService.addCityUser(city);
  }

}
