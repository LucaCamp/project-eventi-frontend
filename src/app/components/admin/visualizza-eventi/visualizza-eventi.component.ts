import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AggiungiEventoComponent } from '../aggiungi-evento/aggiungi-evento.component';

@Component({
  selector: 'app-visualizza-eventi',
  templateUrl: './visualizza-eventi.component.html',
  styleUrls: ['./visualizza-eventi.component.css']
})
export class VisualizzaEventiComponent {
  constructor(private readonly dialog: MatDialog) { }
  aggiungiEvento() {
    this.dialog.open(AggiungiEventoComponent, {
      height: '80%',
      width: '650px',
    });
  }
}
