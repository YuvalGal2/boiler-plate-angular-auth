import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationStart, Router} from "@angular/router";
import {AppStateService} from "./services/shared/app-state.service";
import {AuthService} from "./services/shared/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  public isAuthenticated: boolean = null;
  constructor(private router: Router,
              private appStateService: AppStateService,
              private authService: AuthService) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationStart) {
        this.appStateService.setCurrentUrl(event.url);
      }
    });
  }
  ngOnInit() {
    this.authService.isAuthenticated().subscribe((status: boolean) => {
     this.isAuthenticated = status;
    });
  }
}
