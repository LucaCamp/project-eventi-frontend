import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AggiungiEventoComponent } from './aggiungi-evento/aggiungi-evento.component';
import { EventiServiceService } from 'src/app/services/eventi-service.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-visualizza-eventi',
  templateUrl: './visualizza-eventi.component.html',
  styleUrls: ['./visualizza-eventi.component.css']
})
export class VisualizzaEventiComponent implements OnInit {
  shortDate: string | undefined;
  eventiService;
  listaEventi: any | undefined;
  constructor(private readonly dialog: MatDialog, eventiService: EventiServiceService, private http: HttpClient) {
    this.eventiService = eventiService;
  }
  aggiungiEvento() {
    this.dialog.open(AggiungiEventoComponent, {
      height: '80%',
      width: '650px',
    });
  }

  getEventi() {
    this.eventiService.getEventi().subscribe((data: any) => {
      if (data) {
        this.listaEventi = data;
        console.log(data)
      }
    })
  }
  ngOnInit(): void {
    this.getEventi();
  }
}
