import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  getUserInfo() {
    return this.http.get<any>(environment.apiUrl+'/api/user/info');
  }
  
  getAllThreads() {
    return this.http.get<any>(environment.apiUrl+'/api/project/9009/threats/true');
  }
  
}