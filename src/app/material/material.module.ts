import { NgModule } from '@angular/core';
import {MatSidenavModule, MatSidenav} from '@angular/material/sidenav';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MaterialService} from './material.service';


const MATERIAL_MODULES = [
  MatSidenavModule,
  MatButtonModule,
  MatToolbarModule,
  MatIconModule,
  MatSnackBarModule,
  MatProgressSpinnerModule,
  MatInputModule,
  MatFormFieldModule
]


@NgModule({
  imports: [MATERIAL_MODULES],
  exports: [MATERIAL_MODULES],
  providers: [MaterialService],
  declarations: []
})
export class MaterialModule { }
