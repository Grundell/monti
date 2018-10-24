import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {UiService} from './shared/ui.service';
import { AuthService } from './shared/service/auth.service';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserService } from './shared/service/user.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, AfterViewChecked {
  showMenu = false;
  darkModeActive: any;

  constructor(
    public ui: UiService,
    public authService: AuthService,
    public usrService: UserService
    ) {
  }
  interval$ = interval(2000).pipe(take(24));

  location = {};

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
    
    // this.interval$.subscribe(data => {
    //   console.log(data)
    //   this.darkModeActive = data;
    // })

    this.authService.initAuthListener();
   
  }

  ngAfterViewChecked(){
    navigator.geolocation.getCurrentPosition(success => {
      /* Do some magic. */
      console.log('tehere is the location', success )
    }, failure => {
      if (failure.message.startsWith("Only secure origins are allowed")) {
        // Secure Origin issue.
        console.log('Secure origin ')
      } else {
        console.log('terrible stuff');
      }
    });
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

  modeToggleSwitch() {
    // this.ui.darkModeState.next(!this.darkModeActive);
  }

}