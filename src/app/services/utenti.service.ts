import { Router } from '@angular/router';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Utente } from '../models/utente.model';
import { Observable, of } from 'rxjs';
import { MOCK_UTENTI } from '../components/mock/mock-utenti';

@Injectable({
  providedIn: 'root'
})
export class UtentiService {
  user!: any
  isLoggedIn = false;
  utenti:Utente[] = [];


  constructor(private router: Router ,private http: HttpClient) { }
 

  registraUtente(utente: Utente) {
    // this.utenti.unshift(utente)
    this.http.post('http://localhost:8080/utente/add', utente).subscribe();
  }
  cancellaUtente(id: number) {
    return this.http.delete(`http://localhost:8080/utente/cancella?id=${id}`)
  }
  getUtenti() {
    console.log("sei nel metodo getUtenti")
    return this.http.get<Utente[]>('http://localhost:8080/utente/all').subscribe(
      (data: any) => {
        if (data) {
          this.utenti = data;
        }
      }
    )
 }
  login(email: string, password: string): any {
  
    this.user = this.utenti.find((u) => u.email === email && u.password === password);
    if (this.user) {
      this.isLoggedIn = true;
      return this.user;
    } else {
      this.isLoggedIn = false;
      this.router.navigate([`/login`])
    
    }
  }

  
}