import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable, Subject} from "rxjs";
import {AuthToken, Company, Vacancy, VacancyList, VacancyShort} from "./models";
import {AuthService} from "./auth.service";

@Injectable({
  providedIn: 'root'
})
export class VacancyService {
  BASE_URL = 'http://192.168.0.101:8001'

  constructor(private client: HttpClient) { }

  getCompanyVacancies(compID: number): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(
      `${this.BASE_URL}/api/companies/${compID}/vacancies/`
    )
  }

  getVacancies(): Observable<Vacancy[]>{
    return this.client.get<Vacancy[]>(`${this.BASE_URL}/api/vacancies/`)
  }

  getVacancy(id:number):Observable<Vacancy>{
    return this.client.get<Vacancy>(`${this.BASE_URL}/api/vacancies/${id}/`)
  }
  respond(vacancy_id:number):Observable<any>{

  }
}
