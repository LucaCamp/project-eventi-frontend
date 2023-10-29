import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { UtentiService } from 'src/app/services/utenti.service';

export interface PeriodicElement {
  name: string;
  position: number;
  weight: number;
  symbol: string;
}


@Component({
  selector: 'app-visualizza-utenti',
  templateUrl: './visualizza-utenti.component.html',
  styleUrls: ['./visualizza-utenti.component.css']
})
export class VisualizzaUtentiComponent implements OnInit {
  listaUtenti: any[];
  utentiService;
  constructor(utentiService: UtentiService) {
    this.utentiService = utentiService;
    this.listaUtenti = []
  }

  getUtenti() {
    this.utentiService.getUtenti()
  }
  ngOnInit(): void {
    this.getUtenti();
  }

  onCancella(id: number) {
    this.utentiService.cancellaUtente(id).subscribe()
    this.getUtenti()
  }
}
