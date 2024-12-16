import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})

export class ApiService {
    readonly url: string = "https://dummyjson.com/"

    constructor(
        private http: HttpClient
    ) {}

    /**
   * GET method to fetch data from the API
   * @param endpoint - API endpoint to fetch data from
   * @returns Observable of the HTTP response
   */
  get<T>(endpoint: string): Observable<T> {
    return this.http.get<T>(`${this.url}/${endpoint}`).pipe(
      catchError((error) => {
        console.error('Error occurred while getting data:', error);
        throw error; // Re-throw the error to be handled by the caller
      })
    );
  }
}