import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { PrenotazioniService } from 'src/app/services/prenotazioni.service';
import { CancellaPrenotazioneComponent } from './cancella-prenotazione/cancella-prenotazione.component';
import { ConvalidaPrenotazioneComponent } from './convalida-prenotazione/convalida-prenotazione.component';

@Component({
  selector: 'app-visualizza-prenotazioni',
  templateUrl: './visualizza-prenotazioni.component.html',
  styleUrls: ['./visualizza-prenotazioni.component.css']
})
export class VisualizzaPrenotazioniComponent {
  listaPrenotazioni: Prenotazione[];
  prenotazioniService;
  constructor(private readonly dialog: MatDialog, prenotazioniService: PrenotazioniService) {
    this.prenotazioniService = prenotazioniService;
    this.listaPrenotazioni = []
  }
  onConvalida(idPrenotazione: number) {
    const dialogRef = this.dialog.open(ConvalidaPrenotazioneComponent, {
      height: '300px',
      width: '350px',
      data: { idPrenotazione: idPrenotazione }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'success') {
        this.getPrenotazioni();
      }
    });
  }
  onCancella(idPrenotazione: number) {
    const dialogRef = this.dialog.open(CancellaPrenotazioneComponent, {
      height: '300px',
      width: '350px',
      data: { idPrenotazione: idPrenotazione }
    });
    dialogRef.afterClosed().subscribe((result: any) => {
      if (result === 'success') {
        this.getPrenotazioni();
      }
    });
  }

  getPrenotazioni() {
    this.prenotazioniService.getPrenotazioni().subscribe((data: any) => {
      if (data) {
        this.listaPrenotazioni = data;
        console.log(data)
      }
    })
  }
  ngOnInit(): void {
    this.getPrenotazioni();
  }
}
