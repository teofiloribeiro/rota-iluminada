import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { LightPoint } from '../models/points';

@Injectable({
  providedIn: 'root'
})
export class PointsService {
  
  private readonly API = 'http://localhost:3000'

  constructor(private http: HttpClient) { }

  getPoints() {
    return this.http.get<LightPoint[]>(`${this.API}/point`);
  }
}
