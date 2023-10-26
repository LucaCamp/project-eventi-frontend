import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';
import { Observable, of } from 'rxjs';
import { MOCK_UTENTI } from '../components/mock/mock-utenti';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {

  constructor(private http: HttpClient) { }
  utenti: Utente[] = [];
  getUtenti(): any {
    this.utenti = MOCK_UTENTI
    return of(this.utenti);
    // // const headers = new HttpHeaders({ authorization: 'Basic ' + btoa('user:d534c641-4c17-4539-b53d-b8c9f202dc29') })
    // return this.http.get("http://localhost:8080/api/clienti/all")
  }

  aggiungiUtente(utente: Utente) {
    this.utenti.unshift(utente)
  }
}
