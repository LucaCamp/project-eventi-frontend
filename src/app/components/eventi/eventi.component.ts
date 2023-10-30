import { Router } from '@angular/router';
import { PrenotazioniService } from 'src/app/services/prenotazioni.service';
import { UtentiService } from 'src/app/services/utenti.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Evento } from 'src/app/models/evento.model';
import { EventiServiceService } from 'src/app/services/eventi-service.service';
import { Prenotazione } from 'src/app/models/prenotazione.model';


@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css'],
  styles: [
    'h1 { font-family: "Poppins", sans-serif; font-size: 30px; }',
    'h2 { font-family: "Poppins", sans-serif; font-size: 28px; }'
  ],
})
export class EventBoxComponent implements OnInit {
  short!: string;
  shortDate: string | undefined;
  listaEventi: any | undefined;
  prenotazione: any;

  constructor(
    private router: Router,
    private prenotazioniService: PrenotazioniService,
    private utentiService: UtentiService ,
    private eventiService: EventiServiceService,
    private http: HttpClient) {
    
  }

  getEventi() {
    this.eventiService.getEventi().subscribe((data: any) => {
      if (data) {
        this.listaEventi = data;
        console.log(this.listaEventi)
      }
    })
  }
  ngOnInit(): void {
    this.getEventi();
  }


   prenota(idEvento: number){
    if(this.utentiService.isLoggedIn){
      this.prenotazione = new Prenotazione();
      this.prenotazione.idUtente = this.utentiService.user.id;
      this.prenotazione.idEvento = idEvento;
      this.prenotazione.quantitaPrenotata = 1;
      this.prenotazioniService.aggiungiPrenotazione(this.prenotazione);
      alert("Prenotato!")
    }else{
      this.router.navigate([`/login`])

    }
   }
}
