import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Store } from '@ngrx/store';

import * as fromRoot from '../../app.reducer';

import * as Auth from '../../auth/auth.actions';

@Injectable()

export class AuthService {

  constructor(
    private afAuth  : AngularFireAuth,
    private store   : Store<fromRoot.State>) { }
  
  initAuthListener() {
    console.log('auth init')
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.store.dispatch(new Auth.SetAuthenticated());
        this.store.dispatch(new Auth.SetUserID(user.uid));
      } else {
        this.store.dispatch(new Auth.SetUnauthenticated());
      }
    });
  }

  login() {
    this.store.dispatch({type: 'START_LOADING'});
    this.afAuth.auth.signInAnonymously()
    .then(result => {
      this.store.dispatch({type: 'STOP_LOADING'})
    }).catch( error => {
      this.store.dispatch({type: 'STOP_LOADING'})
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

}
