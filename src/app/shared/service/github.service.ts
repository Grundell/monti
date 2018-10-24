import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as UI from '../actions/ui.actions'; 
import * as Obj from '../actions/object.actions';

@Injectable()
export class GithubService {

  
  constructor(
    public http: HttpClient,
    private store: Store<fromRoot.State>) { }

  getRepos(){
    this.store.dispatch(new UI.StartLoading());
    const dataSub = new Subject<string>();
    let searchTerm: string = 'angular';
    this.http.get(
      `https://api.github.com/search/repositories?q=${searchTerm}&sort=stars&order=desc`)
      .subscribe((data) => {
        console.log(data);
        this.store.dispatch(new UI.StopLoading());
        this.store.dispatch(new Obj.SetLibs(data['items'].slice(0,6)));
      }, (err) => {
        this.store.dispatch(new UI.StopLoading());
        console.log(err);
      });
  }

  getWeatherToday(city){
    city = 'Stockholm';
    this.http.get(`https://api.apixu.com/v1/current.json?key=eb91cfb41dca4442be7235116181710&q=${city}`)
    .subscribe((data) => {
      this.store.dispatch(new UI.StopLoading());
      this.store.dispatch(new Obj.CurrentCity(data));
    }, (err) => {
      this.store.dispatch(new UI.StopLoading());
      console.log(err);
    });
  }
}
