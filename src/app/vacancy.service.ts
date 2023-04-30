import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {AuthToken, Vacancy} from "./models";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://192.168.137.4:8001'

  constructor(private client: HttpClient) { }

  getCompanyVacancies(compID: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${compID}/vacancies`
    )
  }

  getVacancies(): Observable<Vacancy[]>{
    let token = localStorage.getItem("token");
    let headers = new HttpHeaders(
      {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      });
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/vacancies/`,
      {headers: headers}
    )
  }
}
