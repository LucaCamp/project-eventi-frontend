import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Prenotazione } from '../models/prenotazione.model';
import { MOCK_PRENOTAZIONI } from '../components/mock/mock-prenotazioni';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {
  convalidaPrenotazione(idPrenotazione: number) {
    // prenotazione.isConvalidata = true;
  }

  constructor(private http: HttpClient) { }
  prenotazioni: Prenotazione[] = []


  getPrenotazioni(): Observable<Prenotazione[]> {
    this.prenotazioni = MOCK_PRENOTAZIONI
    return of(this.prenotazioni);
    // // const headers = new HttpHeaders({ authorization: 'Basic ' + btoa('user:d534c641-4c17-4539-b53d-b8c9f202dc29') })
    // return this.http.get("http://localhost:8080/api/clienti/all")
  }

  cancellaPrenotazione(idPrenotazione: number) {

  }
}
