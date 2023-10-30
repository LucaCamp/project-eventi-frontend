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
  // getUtenti(): any {
  //   this.utenti = MOCK_UTENTI
  //   return of(this.utenti);
  //   // // const headers = new HttpHeaders({ authorization: 'Basic ' + btoa('user:d534c641-4c17-4539-b53d-b8c9f202dc29') })
  //   // return this.http.get("http://localhost:8080/api/clienti/all")
  // }

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
 }/*   FUNZIONA MA provo un test
  logIn(username:string, password:string){
    this.getUtenti();
    this.utenti.forEach((u)=>{if(u.email===username&&u.password===password){
      this.isLogedIn=true;
      
    }})
  }*/ 
  login(email: string, password: string): any {
    this.getUtenti();
    this.user = this.utenti.find((u) => u.email === email && u.password === password);
    if (this.user) {
      this.isLoggedIn = true;
      //this.isLogedIn = true;
      //return true;
      return this.user;
    } else {
      this.isLoggedIn = false;
      this.router.navigate([`/login`])
    
    }
  }

  
}