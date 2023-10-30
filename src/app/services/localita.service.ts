import { Injectable } from '@angular/core';
import { Localita } from '../models/localita.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalitaService {

  constructor(private http:HttpClient) { }
  getLocalita():Observable<Localita[]> {
    return this.http.get<Localita[]>('http://localhost:8080/localita/all')
 }
}
