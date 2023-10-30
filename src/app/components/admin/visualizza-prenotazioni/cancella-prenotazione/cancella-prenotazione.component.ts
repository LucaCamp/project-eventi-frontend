import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PrenotazioniService } from 'src/app/services/prenotazioni.service';

@Component({
  selector: 'app-cancella-prenotazione',
  templateUrl: './cancella-prenotazione.component.html',
  styleUrls: ['./cancella-prenotazione.component.css']
})
export class CancellaPrenotazioneComponent {
  constructor(private prenotazioniService: PrenotazioniService,
    public dialogRef: MatDialogRef<CancellaPrenotazioneComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { idPrenotazione: number }
  ) { }
 
  cancella(idPrenotazione: number) {
    this.prenotazioniService.cancellaPrenotazione(idPrenotazione);
    this.dialogRef.close('success');
  }

}
