import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { EventiServiceService } from 'src/app/services/eventi-service.service';

@Component({
  selector: 'app-cancella-evento',
  templateUrl: './cancella-evento.component.html',
  styleUrls: ['./cancella-evento.component.css']
})
export class CancellaEventoComponent {
  constructor(private eventiService: EventiServiceService,
    public dialogRef: MatDialogRef<CancellaEventoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }
  ) { }
  cancella(id: number) {
    this.eventiService.cancellaEvento(id);
    this.dialogRef.close('success');
  }

}
