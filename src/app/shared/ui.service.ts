import {Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class UiService {

  darkModeState: BehaviorSubject<number>;

  constructor(
    private snackbar: MatSnackBar
  ) {
    let time = new Date().getHours();
    // if( time >= 16) {
    //   this.darkModeState = new BehaviorSubject<boolean>(true);
    // } else {
    //   this.darkModeState = new BehaviorSubject<boolean>(false);
    // }
    this.darkModeState = new BehaviorSubject<number>(new Date().getHours());
  }
  

  showSnackbar(message, action, duration) {
    this.snackbar.open(message, action, {
      duration: duration
    });
  }
  
}