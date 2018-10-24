import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from './service/auth.service';
import { GithubService } from './service/github.service';
import { WeatherService } from './service/weather.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthService,
    GithubService,
    WeatherService
  ],
  exports: [],

})
export class SharedModule { }
