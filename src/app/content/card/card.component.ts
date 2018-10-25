import { Component, OnInit, Input,  } from '@angular/core';
import { UiService } from 'src/app/shared/ui.service';
import { GithubService } from 'src/app/shared/service/github.service';

import { Store } from '@ngrx/store';
import * as fromRoot from '../../app.reducer';
import * as Obj from '../../shared/actions/object.actions'
import {Observable, interval} from 'rxjs';
import { take, map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { WeatherService } from 'src/app/shared/service/weather.service';
import { UserService } from 'src/app/shared/service/user.service';


@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent implements OnInit {
  darkModeActive: any;
  items$ : Observable<any>;
  isLoading$: Observable<boolean>;
  interval$ = interval(1000).pipe(take(24));

  constructor(
    public ui: UiService,
    private gitHub: GithubService,
    private userService: UserService,
    private store: Store<fromRoot.State>,
    private router: Router
    ) { }

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
    
    // this.gitHub.getRepos();
    this.userService.getUserWeather()

    this.items$ = this.store.select(fromRoot.weatherCities);
    // this.store.select(fromRoot.weatherCities).pipe(
    //   map(data => console.log(data))
    // );
    
    this.isLoading$ = this.store.select(fromRoot.getIsLoading);
  }


  openDetails(item){
    this.store.dispatch(new Obj.CurrentCity(item));
    this.router.navigate(['/detailed', item.location.name])
  }
}
