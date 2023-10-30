import { Injectable } from '@angular/core';
import { Categoria } from '../models/categoria.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoriaService {


  constructor(private http: HttpClient) {
   
   }

  getCategorie():Observable<Categoria[]> {
     return this.http.get<Categoria[]>('http://localhost:8080/categoria/all')
  }
}
