import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Subject} from 'rxjs';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../app.reducer';
import * as UI from '../actions/ui.actions'; 
import * as Obj from '../actions/object.actions';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class WeatherService {
  
  weatherApi = 'https://api.apixu.com/v1/forecast.json?key=05102bb53d6d4525943135834182410&q='

  constructor(
    public http: HttpClient,
    private store: Store<fromRoot.State>,
    private afs: AngularFirestore) { }

    getWeatherToday(city){
      city = 'Stockholm';
      this.http.get(`${this.weatherApi}${city}`)
      .subscribe((data) => {
        this.store.dispatch(new UI.StopLoading());
        this.store.dispatch(new Obj.CurrentCity(data));
      }, (err) => {
        this.store.dispatch(new UI.StopLoading());
        console.log(err);
      });
    }
 
    getWeatherForcast(city){
      this.http.get(`${this.weatherApi}${city}&days=5`)
      .subscribe((data) => {
        this.store.dispatch(new UI.StopLoading());
        this.store.dispatch(new Obj.CurrentCity(data));
      }, (err) => {
        this.store.dispatch(new UI.StopLoading());
        console.log('err', err);
      });
    }

    updateWeather(city){
      this.http.get(`${this.weatherApi}${city}&days=5`)
      .subscribe(data => {
        this.afs.doc(`weather/${city}`).set(data)
        .then(a => console.log('success'))
        .catch(err => console.log(
          'err', err
        ));
      })
    }
}