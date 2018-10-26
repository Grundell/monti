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
export class AppComponent implements OnInit {
  showMenu = false;
  darkModeActive: any;

  constructor(
    public ui: UiService,
    public authService: AuthService,
    public usrService: UserService
    ) {
      // Anon login user 
      this.authService.login();
  }
  interval$ = interval(2000).pipe(take(24));

  location = {};

  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });

    // Initialize user data
    this.authService.initAuthListener();
    this.usrService.getUser();   
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}