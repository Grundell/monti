import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Subscription, Observable } from 'rxjs';
import * as fromRoot from '../../app.reducer';
import * as action from '../actions/user.actions'
import { Usr } from '../models/usr.model';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { map, shareReplay, take , flatMap, switchMap, tap, distinctUntilChanged, subscribeOn} from 'rxjs/operators';
import { combineLatest } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { WeatherService } from './weather.service';
import * as Obj from '../actions/object.actions';
import {Weather} from '../models/weather.model'



@Injectable({
  providedIn: 'root'
})
export class UserService {

  private fbSubs: Subscription[] = [];
  uid: string;
  private userCities$: Observable<any[]>

  
  constructor(
    private store: Store<fromRoot.State>,
    private afs: AngularFirestore,
    private afAuth: AngularFireAuth,
    private weatherService: WeatherService
  ) { 
    // User data from store
    this.store.select(fromRoot.getUID).subscribe(data => {
      this.uid = data
    });

    this.userCities$ = this.store.select(fromRoot.getCities);
   }

   // User data from DB
   getUser() {
    this.afAuth.authState.subscribe(user => {
      this.afs.doc<Usr>(`user/${user.uid}`).valueChanges()
      .subscribe(
        data => {
         this.store.dispatch(new action.SetUsrCities(data.cities))
        }
      )
    });
  }


  // Add City to user doc
  addCityUser(city){
    this.userCities$.pipe(take(1)).subscribe( userCities => {
      this.afs.doc(`user/${this.uid}`).update({cities: [...userCities,
        city] })
      .then(a => this.updateWeather())
      .catch(err => console.log('Shit hit the fan and I can\'t write to db right now', err) );
    });
  }

  // Update weather in DB based on updated city / read from DB
  updateWeather(){
    this.userCities$.pipe(take(1)).subscribe( userCities => {
      userCities.map( city => {
        this.weatherService.updateWeather(city);
      });
    })
  }

async getUserWeather(){
  await this.userCities$.pipe(
      distinctUntilChanged(),
      map(cities => cities
        .map(
          city => {
            return this.afs.doc(`weather/${city}`).valueChanges()
              .pipe(
                map(weather =>  weather ),
            )
          }
        ),
      ),
      flatMap(fobjs => combineLatest(fobjs))      
      ).subscribe(data => {
        const date = Math.floor(Date.now() / 1000);

        // Check if current DB object is older than 1h if true update DB
        data.map((city: Weather ) => {
          let olderThan1H = city.current.last_updated_epoch + 3600 ;
          if(olderThan1H <= date){
            this.weatherService.updateWeather(city.location.name);  
          }  
        })
        this.store.dispatch(new Obj.SetLibs(data))
      });
  }

}
