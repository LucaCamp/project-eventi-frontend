import { Component, Inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Evento } from 'src/app/models/evento.model';
import { EventiServiceService } from 'src/app/services/eventi-service.service';

@Component({
  selector: 'app-modifica-evento',
  templateUrl: './modifica-evento.component.html',
  styleUrls: ['./modifica-evento.component.css']
})
export class ModificaEventoComponent implements OnInit {
  editForm!: FormGroup
  eventoModificato!: Evento;


  constructor(private eventiService: EventiServiceService, private dialogRef: MatDialogRef<ModificaEventoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number }) { }

  ngOnInit(): void {
    //Reactive Form
    this.editForm = new FormGroup({
      nome: new FormControl(null),
      descrizione: new FormControl(null),
      prezzo: new FormControl(null),
      bigliettiDisponibili: new FormControl(null),
      idCategoria: new FormControl(null),
      idLocalita: new FormControl(null),
      data: new FormControl(null)
    })
  }

  onSubmit(id: number) {
    this.eventoModificato = this.editForm.value
    this.eventiService.modificaEvento(id, this.eventoModificato)
    this.eventoModificato = new Evento();
    this.dialogRef.close('success');
  }
}
