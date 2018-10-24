import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SingupComponent } from './singup/singup.component';
import { LoginComponent } from './login/login.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [SingupComponent, LoginComponent]
})
export class AuthModule { }
