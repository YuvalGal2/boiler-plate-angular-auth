import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppStateService {
  private appUrl = '/';
  constructor(private http: HttpClient) { }

  public setCurrentUrl(url: string): void {
    this.appUrl = url;
  }
}
