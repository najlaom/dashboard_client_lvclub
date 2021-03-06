import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  login(email: any, password: any) {
    return this.http.post(environment.apiLoginUser,
      {
        "email": email,
        "password": password
      });
  }
  inLogin(){
    return !!localStorage.getItem('token')
  }
 
}
