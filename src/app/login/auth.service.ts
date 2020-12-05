import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  headers = new HttpHeaders({
    'Content-Type': 'application/x-www-form-urlencoded'
  });

  constructor(private http: HttpClient, private router: Router) { }

  public login(username, password) {
    const body = new HttpParams()
      .set('grant_type', environment.grant_type)
      .set('username', username)
      .set('password', password);

    return this.http.post<any>(environment.apiUrl + `/token`, body.toString(), { headers: this.headers });
  }

  // Check access token is available or not
  public getToken() {
    return localStorage.getItem('access_token');
  }

  refreshToken(): Observable<any> {
    const refresh_token = localStorage.getItem('refresh_token');

    const body = new HttpParams()
      .set('grant_type', environment.refresh_token)
      .set('refresh_token', refresh_token);

    return this.http.post(environment.apiUrl + `/token`, body.toString(), { headers: this.headers });
  }

  public logout() {
    localStorage.removeItem('access_token');
    localStorage.removeItem('refresh_token');
    localStorage.removeItem('expires_in');
    this.router.navigateByUrl('/');
  }
}
