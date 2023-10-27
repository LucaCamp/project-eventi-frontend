import { Component, Inject } from '@angular/core';
import { PrenotazioniService } from 'src/app/services/prenotazioni.service';
import { CancellaPrenotazioneComponent } from '../cancella-prenotazione/cancella-prenotazione.component';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-convalida-prenotazione',
  templateUrl: './convalida-prenotazione.component.html',
  styleUrls: ['./convalida-prenotazione.component.css']
})
export class ConvalidaPrenotazioneComponent {
  constructor(private prenotazioniService: PrenotazioniService,
    public dialogRef: MatDialogRef<CancellaPrenotazioneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idPrenotazione: number }
  ) { }
  convalida(idPrenotazione: number) {

  }

}