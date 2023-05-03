import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AccessTokenData, AuthToken, RegisteredUser, User, UserInfo} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://192.168.0.101:8001'

  constructor(private http: HttpClient) { }

  getAuthToken(username: string, password: string): Observable<UserInfo> {
    let data = {
      "username": username,
      "password": password,
    }
    return this.http.post<UserInfo>(`${this.BASE_URL}/api/login/`, data);
  }

  register(username:string, password: string): Observable<RegisteredUser>{
    let data = {
      "username": username,
      "password": password,
    }
    return this.http.post<RegisteredUser>(`${this.BASE_URL}/api/register/`,data);
  }
}
