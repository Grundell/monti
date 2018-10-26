import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromRoot from '../app.reducer';
import {Observable} from 'rxjs';
import { UiService } from '../shared/ui.service';
import { WeatherService } from '../shared/service/weather.service';
import { UserService } from '../shared/service/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  newSearch: string;
  isLoading$: Observable<boolean>;
  darkModeActive: any;



  constructor(
    private store: Store<fromRoot.State>,
    public ui: UiService,
    private weatherService: WeatherService,
    private usrService: UserService
  ) { }

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });


  }

  search(city){
    this.weatherService.getWeatherForcast(city);
  }

}
