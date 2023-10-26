import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/auth/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent {
  constructor(private router: Router, private authService: AuthService) {

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
