import { Component } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  UserLoggedIn: Boolean;

  constructor(
    private router: Router
  ) {
    router.events.subscribe(event => {
      if (event instanceof NavigationEnd ) {
         if (event.url === '/login' || event.url === '/') {
            this.UserLoggedIn = false;
         } else {
            this.UserLoggedIn = true;
         }
      }
   });
  }
  Logout() {
    this.router.navigate(['/login']);
  }

}
