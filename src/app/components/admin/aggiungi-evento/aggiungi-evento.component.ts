import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { Evento } from 'src/app/models/evento.model';
import { EventiServiceService } from 'src/app/services/eventi-service.service';

@Component({
  selector: 'app-aggiungi-evento',
  templateUrl: './aggiungi-evento.component.html',
  styleUrls: ['./aggiungi-evento.component.css'],

})
export class AggiungiEventoComponent implements OnInit {
  addForm!: FormGroup
  eventiService

  nuovoEvento: Evento = new Evento()
  constructor(eventiService: EventiServiceService,) {
    this.eventiService = eventiService

  }
  ngOnInit(): void {
    //Reactive Form
    this.addForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      descrizione: new FormControl(null, Validators.required),
      prezzo: new FormControl(null, Validators.required),
      bigliettiDisponibili: new FormControl(null, Validators.required),
      categoria: new FormControl(null, Validators.required),
      localita: new FormControl(null, Validators.required),
      data: new FormControl(null, Validators.required),

    })
  }


  //Metodo onsubmit per il Reactive Forms
  onSubmit() {
    this.nuovoEvento = this.addForm.value
    this.eventiService.aggiungiEvento(this.nuovoEvento)
    this.nuovoEvento = new Evento();
    this.addForm.reset()
  }


  //Metodo onsubmit per il Template Driven Form

  // onSubmit(form: any) {
  //   this.nuovoEvento.nome = form.value.nome;
  //   this.nuovoEvento.localita = form.value.localita;
  //   this.nuovoEvento.descrizione = form.value.descrizione;
  //   this.nuovoEvento.data = form.value.data;
  //   this.nuovoEvento.prezzo = form.value.prezzo;
  //   this.eventiService.aggiungiEvento(this.nuovoEvento)
  //   this.nuovoEvento = new Evento();
  //   form.reset()
  // }
}
