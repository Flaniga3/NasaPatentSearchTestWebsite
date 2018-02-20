import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError, map, tap } from 'rxjs/operators';
import { of } from 'rxjs/observable/of';

@Injectable()
export class NasaPatentService {
  // TODO: ENV variable for API URL
  // companiesBaseURL = 'https://exampleapi-nwm.azurewebsites.net/api/NasaPatent'
  patentsBaseURL = 'http://localhost:58559/api/NasaPatents'

  constructor(
    private http: HttpClient
  ) { }

  getPatents() {
    return this.http.get(this.patentsBaseURL)
      .pipe(
        catchError(this.handleError('getPatents', []))
      );
  }

  searchPatents(query: string) {
    const searchURL = encodeURI(`${this.patentsBaseURL}?query=${query}`);
    return this.http.get(searchURL)
      .pipe(
        catchError(this.handleError('getPatents', []))
      );
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
