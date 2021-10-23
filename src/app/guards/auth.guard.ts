import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import {AuthService} from '../services/shared/auth.service';
import {PRIVACY_PRIVATE} from 'tslint/lib/rules/completedDocsRule';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  private passedTest = localStorage.getItem('access_token') === null ? false : true;
  constructor(private router: Router, private authService: AuthService) { }
  async canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (localStorage.getItem('access_token')) {
      return true;
    }
    this.router.navigate(['sign-in']);
    return false;
  }
}
