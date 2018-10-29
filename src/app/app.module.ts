import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppRoutingModule } from './app-routing.module';
import { AngularFireModule } from '@angular/fire';
import { AppComponent } from './app.component';
import { UiService } from './shared/ui.service';
import { HomeComponent } from './home/home.component';
import { CardComponent } from './content/card/card.component';
import { SharedModule } from './shared/shared.module';
import { environment } from 'src/environments/environment';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools'
import { HttpClientModule } from '@angular/common/http';
import { reducers } from './app.reducer';
import { MaterialModule } from './material/material.module';
import { DetailedComponent } from './content/detailed/detailed.component';
import { SearchComponent } from './content/search/search.component';
import { WeekdayDirective } from './shared/directive/weekday.directive';
import { WeekdayPipe } from './shared/pipe/weekday.pipe';
import { StoreRouterConnectingModule, RouterStateSerializer } from '@ngrx/router-store';
import { CustomRouterStateSerializer } from './shared/reducers/router.reducer';
import { ClearCurrentResolver } from './shared/resolver/clearCurrent.resolver';
import { WeatherIconComponent } from './content/weather-icon/weather-icon.component';
import { ActionsComponent } from './content/detailed/actions/actions.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CardComponent,
    DetailedComponent,
    SearchComponent,
    WeekdayDirective,
    WeekdayPipe,
    WeatherIconComponent,
    ActionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    StoreModule.forRoot(reducers),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    StoreRouterConnectingModule.forRoot(),
    SharedModule,
    MaterialModule
  ],
  providers: [
    UiService,
    {provide: RouterStateSerializer, useClass: CustomRouterStateSerializer},
    ClearCurrentResolver
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
