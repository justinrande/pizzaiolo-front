import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allergene } from '../models/allergene';

@Injectable({
  providedIn: 'root',
})
export class AllergenesService {
  readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllergenes(): Observable<Allergene[]> {
    return this.http.get<Allergene[]>(`${this.API_URL}/allergenes`);
  }
}
