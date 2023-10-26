import { EventEmitter, Injectable } from '@angular/core';
import { Evento } from '../models/evento.model';
import { Observable, of } from 'rxjs';
import { MOCK_EVENTI } from '../components/mock/mock-eventi';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventiServiceService {
  constructor(private http: HttpClient) { }
  eventi: Evento[] = []

  getEventi(): any {
    this.eventi = MOCK_EVENTI
    return of(this.eventi.reverse());
    // // const headers = new HttpHeaders({ authorization: 'Basic ' + btoa('user:d534c641-4c17-4539-b53d-b8c9f202dc29') })
    // return this.http.get("http://localhost:8080/api/clienti/all")
  }

  aggiungiEvento(evento: Evento) {
    this.eventi.unshift(evento)
  }

}


