import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Utente } from 'src/app/models/utente.model';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
formLogin!: FormGroup;
utenteService!: UtentiService;



constructor(private router: Router, utenteService: UtentiService) {
  this.utenteService = utenteService;
}


ngOnInit(): void {
  this.utenteService.getUtenti();
  this.formLogin = new FormGroup({
    email: new FormControl(null, Validators.required),
    password: new FormControl(null, Validators.required)
  })
  
}

logOut(){
  this.utenteService.isLoggedIn = false;
  this.utenteService.user = new Utente();
}

check(){
  this.utenteService.login(this.formLogin.value.email, this.formLogin.value.password)
  const loginSuccess = this.utenteService.isLoggedIn
  if(loginSuccess){
    this.router.navigate([`/home`])
    console.log(this.utenteService.user)
  }else{
    alert("Login fail. user or password ")
  }
 }

}
