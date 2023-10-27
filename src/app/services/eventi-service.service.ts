import { EventEmitter, Injectable } from '@angular/core';
import { Evento } from '../models/evento.model';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventiServiceService {
  cancellaEvento(id: number) {
    return this.http.delete(`http://localhost:8080/evento/${id}`).subscribe()
  }
  constructor(private http: HttpClient) { }
  eventi: Evento[] = []

  getEventi(): Observable<Evento[]> {
    return this.http.get<Evento[]>("http://localhost:8080/evento/all")
    // return of(this.eventi);
    // // const headers = new HttpHeaders({ authorization: 'Basic ' + btoa('user:d534c641-4c17-4539-b53d-b8c9f202dc29') })
    // return 
  }

  aggiungiEvento(evento: Evento): any {
    // this.eventi.unshift(evento)
    console.log(JSON.stringify(evento))
    return this.http.post<Evento>("http://localhost:8080/evento/crea", evento).subscribe();

  }

}
