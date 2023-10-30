import { Prenotazione } from 'src/app/models/prenotazione.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MOCK_PRENOTAZIONI } from '../components/mock/mock-prenotazioni';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PrenotazioniService {
  convalidaPrenotazione(idPrenotazione: number) {
    console.log(idPrenotazione)
    return this.http.put<Prenotazione>(`http://localhost:8080/prenotazione/modifica?id=${idPrenotazione}`, { isConvalidata: true }).subscribe()
  }

  constructor(private http: HttpClient) { }
  prenotazioni: Prenotazione[] = []

  aggiungiPrenotazione(prenotazione: Prenotazione){
    return this.http.post<Prenotazione>("http://localhost:8080/prenotazione/add",prenotazione).subscribe()
  }

  getPrenotazioni(): Observable<Prenotazione[]> {
    return this.http.get<Prenotazione[]>("http://localhost:8080/prenotazione/all")
  }

  cancellaPrenotazione(idPrenotazione: number) {
    console.log(idPrenotazione)
    return this.http.delete(`http://localhost:8080/prenotazione/cancella/${idPrenotazione}`).subscribe()
  }
}
