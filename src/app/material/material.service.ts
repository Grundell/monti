import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Injectable()
export class MaterialService {

  constructor(private snackbar: MatSnackBar) {}

  showSnackbar(message, action, duration, extraClasses?) {
    this.snackbar.open(message, action, {
      duration, 
    });
  }

}
