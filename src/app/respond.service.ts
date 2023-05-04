import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Company, Respond} from "./models";

@Injectable({
  providedIn: 'root'
})
export class RespondService {

  BASE_URL = 'http://192.168.0.101:8001'
  constructor(private client: HttpClient) {}

  getResponds(): Observable<Respond[]> {
    return this.client.get<Respond[]>(
      `${this.BASE_URL}/api/respond/`
    )
  }

}
