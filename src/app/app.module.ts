import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';

import { EventBoxComponent } from './components/eventi/eventi.component';
import { AreaPersonaleComponent } from './components/area-personale/area-personale.component';
import { AdminAreaComponent } from './components/admin/admin-area/admin-area.component';
import { AggiungiEventoComponent } from './components/admin/aggiungi-evento/aggiungi-evento.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { VisualizzaEventiComponent } from './components/admin/visualizza-eventi/visualizza-eventi.component';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ContattiComponent } from './components/contatti/contatti.component';
import { VisualizzaUtentiComponent } from './components/admin/visualizza-utenti/visualizza-utenti.component';
import { VisualizzaPrenotazioniComponent } from './components/admin/visualizza-prenotazioni/visualizza-prenotazioni.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    EventBoxComponent,
    AreaPersonaleComponent,
    AdminAreaComponent,
    AggiungiEventoComponent,
    LoginPageComponent,
    AdminHomeComponent,
    VisualizzaEventiComponent,
    ContattiComponent,
    VisualizzaUtentiComponent,
    VisualizzaPrenotazioniComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatDialogModule,
    ReactiveFormsModule,
    HttpClientModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
