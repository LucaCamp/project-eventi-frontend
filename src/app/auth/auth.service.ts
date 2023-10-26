import { Injectable } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BackOffice } from '../models/backOffice.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // admin: BackOffice = { nome: "admin", password: "admin", isLoggedIn: false };
  // authenticated: boolean = false;
  // verificaAdmin(form: NgForm) {
  //   if (form.value.username === this.admin.username && form.value.password === this.admin.password) {
  //     return true;
  //   } else return false;

  // }

  // isAutenticated() {
  //   return this.admin.isLoggedIn;
  // }
  // constructor(private http: HttpClient) { }

}


