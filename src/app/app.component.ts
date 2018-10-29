import {Component, OnInit, AfterViewChecked} from '@angular/core';
import {UiService} from './shared/ui.service';
import { AuthService } from './shared/service/auth.service';
import { interval } from 'rxjs';
import { take } from 'rxjs/operators';
import { UserService } from './shared/service/user.service';
import {Store } from '@ngrx/store';
import * as fromRoot from './app.reducer';

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
    public usrService: UserService,
    public store: Store<fromRoot.State>
    ) {
      // Anon login user 
      this.authService.login();
    }
  ngOnInit() {
    this.ui.darkModeState.subscribe((value) => {
      this.darkModeActive = value;
    });
    // Initialize user data
    this.authService.initAuthListener();
    this.store.select(fromRoot.getAuthState).subscribe(
      data => {
        if(data.authID) {
          this.usrService.getUser();   
        }
      }
    )
  }

  toggleMenu() {
    this.showMenu = !this.showMenu;
  }

}