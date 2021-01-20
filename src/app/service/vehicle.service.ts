import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';
import { Vehicle } from '../model/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  private vehiclesApiUrl = 'http://localhost:8080/api-alelo/vehicle';
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(private http: HttpClient) {
  }

  getVehicles(page: number, limit: number): Observable<Vehicle[]>{
    const url = `${this.vehiclesApiUrl}?page=${page}&limit=${limit}`;

    return this.http.get<Vehicle[]>(url)
    .pipe(
      map(response => response.data),
      catchError(this.handleError<Vehicle[]>('getVehicles', []))
    );
  }

  getVehicleById(id: number): Observable<Vehicle> {
    const url = `${this.vehiclesApiUrl}/${id}`;
    return this.http.get<Vehicle>(url).pipe(
      catchError(this.handleError<Vehicle>(`getVehicleById id=${id}`))
    );
  }
  
  searchVehicleByPlate(term: string): Observable<Vehicle[]> {
    if (!term.trim()) {
      return of([]);
    }
    const url = `${this.vehiclesApiUrl}?filter=${term}`;

    return this.http.get<Vehicle[]>(url).pipe(
      catchError(this.handleError<Vehicle[]>('searchVehicleByPlate', []))
    );
  }
  
  addVehicle(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(this.vehiclesApiUrl, vehicle, this.httpOptions).pipe(
      catchError(this.handleError<Vehicle>('addVehicle'))
    );
  }
  
  deleteVehicle(vehicle: Vehicle | number): Observable<Vehicle> {
    const id = typeof vehicle === 'number' ? vehicle : vehicle.id;
    const url = `${this.vehiclesApiUrl}/${id}`;
  
    return this.http.delete<Vehicle>(url, this.httpOptions).pipe(
      catchError(this.handleError<Vehicle>('deleteVehicle'))
    );
  }
  
  updateVehicle(vehicle: Vehicle): Observable<any> {
    const url = `${this.vehiclesApiUrl}/${vehicle.id}`;
    return this.http.put(url, vehicle, this.httpOptions).pipe(
      catchError(this.handleError<any>('updateVehicle'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      return of(result as T);
    };
  }
}