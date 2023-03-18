import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Allergenes } from '../models/allergenes';

@Injectable({
  providedIn: 'root',
})
export class AllergenesService {
  readonly API_URL = 'http://localhost:3000';

  constructor(private http: HttpClient) {}

  getAllergenes(): Observable<Allergenes[]> {
    return this.http.get<Allergenes[]>(`${this.API_URL}/allergenes`);
  }
}
