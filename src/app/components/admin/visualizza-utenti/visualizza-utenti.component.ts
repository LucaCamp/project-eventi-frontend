import { Component, OnInit } from '@angular/core';
import { Utente } from 'src/app/models/utente.model';
import { UtentiService } from 'src/app/services/utenti.service';

@Component({
  selector: 'app-visualizza-utenti',
  templateUrl: './visualizza-utenti.component.html',
  styleUrls: ['./visualizza-utenti.component.css']
})
export class VisualizzaUtentiComponent implements OnInit {
  listaUtenti: Utente[] = []
  utentiService;
  constructor(utentiService: UtentiService) {
    this.utentiService = utentiService;
  }

  getUtenti() {
    this.utentiService.getUtenti().subscribe((data: any) => {
      if (data) {
        this.listaUtenti = data;
        console.log(data)
      }
    })
  }
  ngOnInit(): void {
    this.getUtenti();
  }
}
