import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AggiungiEventoComponent } from './aggiungi-evento/aggiungi-evento.component';
import { EventiServiceService } from 'src/app/services/eventi-service.service';
import { HttpClient } from '@angular/common/http';
import { CancellaEventoComponent } from './cancella-evento/cancella-evento.component';
import { ModificaEventoComponent } from './modifica-evento/modifica-evento.component';

@Component({
  selector: 'app-visualizza-eventi',
  templateUrl: './visualizza-eventi.component.html',
  styleUrls: ['./visualizza-eventi.component.css']
})
export class VisualizzaEventiComponent implements OnInit {
  long: string | undefined;
  eventiService;
  listaEventi: any | undefined;

  constructor(private readonly dialog: MatDialog, eventiService: EventiServiceService, private http: HttpClient) {
    this.eventiService = eventiService;
  }


  aggiungiEvento() {
    const dialogRef = this.dialog.open(AggiungiEventoComponent, {
      height: '80%',
      width: '650px',
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'success') {
        this.getEventi();
      }
    });
  }

  cancellaEvento(id: number) {
    const dialogRef = this.dialog.open(CancellaEventoComponent, {
      height: '300px',
      width: '350px',
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'success') {
        this.getEventi();
      }
    });
  }

  modificaEvento(id: number) {
    const dialogRef = this.dialog.open(ModificaEventoComponent, {
      height: '80%',
      width: '650px',
      data: { id: id }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'success') {
        this.getEventi();
      }
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
