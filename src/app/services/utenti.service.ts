import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private http: HttpClient) { }

  getUtenti(): any {
    // return this.http.get("http://localhost:8080/api/clienti/all")
    const headers = new HttpHeaders({ authorization: 'Basic ' + btoa('user:5242d1bd-8b13-4f7c-bcc8-4ec0ccb6eb46') })
    return this.http.get("http://localhost:8080/api/clienti/all", { headers: headers })
  }
}
