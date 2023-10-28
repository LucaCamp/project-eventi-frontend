import { Component } from '@angular/core';
import { Form, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';
import { Utente } from 'src/app/models/utente.model';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  formLogin!: FormGroup;
  formSignup!: FormGroup;
  constructor(private router: Router, private utenteService: UtentiService) {

  }
  ngOnInit(): void {
    //Reactive Form
    this.formLogin = new FormGroup({
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required)
    })
    this.formSignup = new FormGroup({
      nome: new FormControl(null, Validators.required),
      cognome: new FormControl(null, Validators.required),
      email: new FormControl(null, Validators.required),
      password: new FormControl(null, Validators.required),
      codiceFiscale: new FormControl(null, Validators.required)
    })
  }

  login() {
    this.utenteService.logIn(this.formLogin.value.email, this.formLogin.value.password);
  }
  signup() {
    console.log("registrato")
    let utente: Utente = this.formSignup.value;
    this.utenteService.registraUtente(utente);
  }
  // onSubmit(form: NgForm) {
  //   if (this.authService.verificaAdmin(form)) {
  //     this.goLink('admin/home')
  //     this.authService.admin.isLoggedIn = true;
  //   } else alert("non sei l'admin!")
  // }

  // goLink(link: string) {
  //   this.router.navigate([link])
  // }
}
