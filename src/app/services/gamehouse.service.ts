import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { GHS } from '../models/GHS';
import { Login } from '../models/login';

@Injectable({
  providedIn: 'root',
})
export class GamehouseService {
  api = 'http://localhost:8080/rest4/public/api/mobile';

  constructor(private http: HttpClient) {}

  httpOptions = {
    headers: new HttpHeaders({
      responseType: 'json',
    }),
  };

  handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` + `body was: ${error.error}`
      );
    }
    // return an observable with a user-facing error message
    return throwError('Something bad happened; please try again later.');
  }

  // ambil data mahasiswa
  findAll(): Observable<GHS> {
    return this.http
      .get<GHS>(this.api + '/findall')
      .pipe(retry(2), catchError(this.handleError));
  }

  find(id: any): Observable<any> {
    return this.http.get<GHS>(`${this.api + '/find'}/${id}`);
  }

  // mengambil data detail GHS sesuai nim
  detailGHS(id:any): Observable<GHS> {
    return this.http
      .get<GHS>(`{this.api}/find"}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  create(data:any): Observable<GHS> {
    return this.http.post<GHS>(
      this.api + '/create',
      JSON.stringify(data),
      this.httpOptions
    );
  }

  // edit data sesuai nim
  update(mobile: GHS): Observable<any> {
    return this.http.post<GHS>(this.api + '/update', mobile, this.httpOptions);
  }

  // hapus data sesuai nim
  delete(id: any): Observable<any> {
    return this.http
      .delete<any>(`${this.api + '/delete'}/${id}`)
      .pipe(retry(2), catchError(this.handleError));
  }

  login(item:any): Observable<Login> {
    return this.http
      .post<Login>(
        this.api + '/auth/login',
        JSON.stringify(item),
        this.httpOptions
      )
      .pipe(retry(2), catchError(this.handleError));
  }
}
