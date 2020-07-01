import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/internal/operators';
import { LivreDor } from '../models/livre-dor';

@Injectable({
  providedIn: 'root'
})
export class LivreDorService {

  constructor(private http: HttpClient) { }

  // CONNEXION SERVEUR BACK END

  apiURL = 'http://localhost:3000/charlene-message';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': "application/json"
    })
  };

  // MESSAGE ERREUR SI PAS DE CONNEXION


  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }


  // MES FONCTIONS

  //RETOURNE TOUTES LES CHAUSSURES

  getMessages(): Observable<LivreDor[]> {
    return this.http.get<LivreDor[]>(this.apiURL, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }


  // AJOUTE DUN MESSAGE

  addMessage(message: LivreDor): Observable<LivreDor> {
    return this.http.post<LivreDor>(this.apiURL, message, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }


  // RETOURNE LE MESSAGE SELON SON ID

  getOneMessage(id: number): Observable<LivreDor> {
    return this.http.get<LivreDor>(this.apiURL + '/' + id).pipe(retry(1),
      catchError(this.handleError)
    );
  }


  // MODIFIER UN MESSAGE

  editMessage(planet: LivreDor): Observable<LivreDor> {
    return this.http.put<LivreDor>(this.apiURL + '/' + planet.id, planet, this.httpOptions).pipe(retry(1),
      catchError(this.handleError)
    );
  }

  // SUPPRIMER UN MESSAGE

  deleteMessage(id: number): Observable<LivreDor> {
    return this.http.delete<LivreDor>(this.apiURL + '/' + id).pipe(retry(1),
      catchError(this.handleError)
    );
  }

}
