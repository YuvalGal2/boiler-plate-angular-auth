import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AppStateService } from './app-state.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public authenticatedObs = new BehaviorSubject(false);
  constructor(private http: HttpClient, private router: Router,
              private appStateService: AppStateService) { }
  authenticate(username, password, serverIP) {
    return this.http.post<{access_token: string}>(`http://${serverIP}/auth/login`, {username, password})
      .pipe(
        map(result => {
          localStorage.setItem('access_token', result.access_token);
          localStorage.setItem('server_ip', serverIP);
          this.authenticatedObs.next(true);
          return true;
        })
      );
  }

  logout() {
    localStorage.removeItem('access_token');
    this.authenticatedObs.next(false);
    this.router.navigate(['/sign-in']);
  }
  isAuthenticated() {
    if (localStorage.getItem('access_token') !== null) {
      this.authenticatedObs.next(true);
    }
    return this.authenticatedObs;
  }
}
