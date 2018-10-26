import { Component, OnInit, Input} from '@angular/core';
import { Store } from '@ngrx/store';
import { Location } from '@angular/common';

import * as fromRoot from '../../app.reducer';
import { Observable } from 'rxjs';
import { map, tap, take } from 'rxjs/operators'
import { UserService } from 'src/app/shared/service/user.service';
import { Router } from '@angular/router';
import * as Obj from '../../shared/actions/object.actions'
import { UiService } from 'src/app/shared/ui.service';



@Component({
  selector: 'app-detailed',
  templateUrl: './detailed.component.html',
  styleUrls: ['./detailed.component.scss']
})
export class DetailedComponent implements OnInit {
  weatherData$: Observable<any>;
  path: any;
  darkModeActive: any;

  constructor(
    private store: Store<fromRoot.State>,
    private userService: UserService,
    private router : Router,
    public ui: UiService,
  ) {
    this.store.select(fromRoot.getRouterState).subscribe(
      data => {
        if(data.state.url === '/'){
          this.path = 'home';
        } else {
          this.path = 'detailed'
        }
      }
    )
   }

  ngOnInit() {

    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });

    switch (this.path){
      case "home": {
        this.weatherData$ = this.store.select(fromRoot.getCurrent);
        break;
      }
      case "detailed" : {
        this.weatherData$ = this.store.select(fromRoot.getCurrent).pipe(
          map(data => {
            if (data) { 
              return data 
            } else if(!data){
              this.userService.singleWeather();
            }
          }),
        );
        break;
      }
    }
  }
}
