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
  isLogedIn:boolean = false;
  constructor(private router: Router ,private http: HttpClient) { }
  utenti:Utente[] = [];

  
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
  getUtenti(){
    console.log("sei nel metodo getUtenti")
    return this.http.get<Utente[]>('http://localhost:8080/utente/all').subscribe(
      (data: any) => {
      if (data) {
        this.utenti=data;
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
  

  login(username: string, password: string): Utente {
    this.getUtenti();
    const user = this.utenti.find((u) => u.email === username && u.password === password);
    if (user) {
      user.isLoggedIn = true;
      //this.isLogedIn = true;
      //return true;
      return user;
    } else {
      this.router.navigate([`/login`])
    }
  }



  logOut(){
    this.isLogedIn=false;
    console.log(this.isLogedIn)
  }
}
