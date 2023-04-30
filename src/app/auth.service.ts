import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken} from "./models";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  BASE_URL = 'http://192.168.137.4:8001'

  constructor(private http: HttpClient) { }

  getAuthToken(username: string, password: string): Observable<AuthToken> {
    let data = {
      "username": username,
      "password": password,
    }
    return this.http.post<AuthToken>(`${this.BASE_URL}/api/login/`, data);
  }
}
