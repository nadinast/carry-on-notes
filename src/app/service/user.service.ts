import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpClient: HttpClient) { }

  login(user: User) : Observable<any>{
    return this.httpClient.post(`${environment.apiUrl}/api/user/login`, user);
  }

  register(user: User){
    return this.httpClient.post(`${environment.apiUrl}/api/user/register`, user);
  }

  logout() : Observable<any>{
    return this.httpClient.get(`${environment.apiUrl}/api/user/logout`);
  }

}
