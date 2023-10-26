import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdminAreaComponent } from './components/admin/admin-area/admin-area.component';
import { AreaPersonaleComponent } from './components/area-personale/area-personale.component';
import { HomeComponent } from './components/home/home.component';
import { AggiungiEventoComponent } from './components/admin/visualizza-eventi/aggiungi-evento/aggiungi-evento.component';
import { LoginPageComponent } from './components/login-page/login-page.component';
import { AdminHomeComponent } from './components/admin/admin-home/admin-home.component';
import { VisualizzaEventiComponent } from './components/admin/visualizza-eventi/visualizza-eventi.component';
import { ContattiComponent } from './components/contatti/contatti.component';
import { VisualizzaUtentiComponent } from './components/admin/visualizza-utenti/visualizza-utenti.component';
import { VisualizzaPrenotazioniComponent } from './components/admin/visualizza-prenotazioni/visualizza-prenotazioni.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'admin', redirectTo: 'admin/home' },
  { path: 'login', component: LoginPageComponent },
  { path: 'contatti', component: ContattiComponent },
  {
    path: 'admin', component: AdminAreaComponent, children: [
      { path: 'home', component: AdminHomeComponent },
      { path: 'aggiungi-evento', component: AggiungiEventoComponent },
      { path: 'visualizza-eventi', component: VisualizzaEventiComponent },
      { path: 'visualizza-utenti', component: VisualizzaUtentiComponent },
      { path: 'visualizza-prenotazioni', component: VisualizzaPrenotazioniComponent },
      { path: 'admin/login', component: LoginPageComponent }
    ]
  },
  { path: 'area-personale', component: AreaPersonaleComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
