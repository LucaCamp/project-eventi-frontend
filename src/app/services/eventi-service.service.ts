import { EventEmitter, Injectable } from '@angular/core';
import { Evento } from '../models/evento.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MOCK_EVENTI } from '../components/mock/mock-eventi';

@Injectable({
  providedIn: 'root'
})
export class EventiServiceService {
  constructor(private http: HttpClient) { }
  eventi: Observable<Evento[]> = of(MOCK_EVENTI)

  modificaEvento(id: number, eventoModificato: Evento) {
    // console.log(eventoModificato)

    return this.http.put<Evento>(`http://localhost:8080/evento/modifica?id=${id}`, eventoModificato).subscribe()
  }
  cancellaEvento(id: number) {
    return this.http.delete(`http://localhost:8080/evento/${id}`).subscribe()
  }

  getEventi(): Observable<Evento[]> {
    return this.http.get<Evento[]>("http://localhost:8080/evento/all")

  }

  getEvento(id: number) {
    return this.http.get<Evento>(`http://localhost:8080/evento/${id}`)
  }
  aggiungiEvento(evento: Evento): any {
    console.log(JSON.stringify(evento))
    return this.http.post<Evento>("http://localhost:8080/evento/crea", evento).subscribe();

  }

}
