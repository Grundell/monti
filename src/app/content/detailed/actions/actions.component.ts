import { Component, OnInit, Input } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../../app.reducer';
import * as Obj from '../../../shared/actions/object.actions';
import { Router } from '@angular/router';
import { UserService } from 'src/app/shared/service/user.service';



@Component({
  selector: 'app-actions',
  templateUrl: './actions.component.html',
  styleUrls: ['./actions.component.scss']
})
export class ActionsComponent implements OnInit {
  @Input() path;
  @Input() city;
  subscribed: boolean = false;
  cities: any[];

  constructor(
    private store: Store<fromRoot.State>,
    private router: Router,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.store.select( fromRoot.getCities).subscribe(
      data => {
        this.cities = data;
        this.subscribed = data.includes(this.city); 
      } 
    )
  }
  
  addToUser(city){
    this.userService.addCityUser(city);
    if(this.path === 'detailed'){
      this.router.navigate(['/']); 
      this.store.dispatch( new Obj.RemoveSelected());  
    } else {
      this.store.dispatch( new Obj.RemoveSelected());  
    }
  }

  close(){
    if( this.path === 'detailed' ){
      this.router.navigate(['/'])
      Promise.resolve()
      .then( (_) =>
        this.store.dispatch( new Obj.RemoveSelected())
      )
    } else {
       this.store.dispatch( new Obj.RemoveSelected())
    }
  }

  removeCity(){
    console.log();
    let index = this.cities.indexOf(this.city);
    this.cities.splice(index, 1)
    this.userService.updateCities(this.cities);
    this.router.navigate(['/'])
  }
}
