import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class CarService {
  private readonly endpoint = 'http://localhosr:1234/cars';

  constructor(private readonly http:HttpClient) {}

    public getAllCars(): Observable<Car[]> {
      return this.http.get<Car[]>(this.endpoint);

    }
  }
}
