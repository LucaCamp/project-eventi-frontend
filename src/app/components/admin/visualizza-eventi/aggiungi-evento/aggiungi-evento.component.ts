import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators, } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { Categoria } from 'src/app/models/categoria.model';
import { Evento } from 'src/app/models/evento.model';
import { CategoriaService } from 'src/app/services/categoria.service';
import { EventiServiceService } from 'src/app/services/eventi-service.service';
import { LocalitaService } from 'src/app/services/localita.service';

@Component({
  selector: 'app-aggiungi-evento',
  templateUrl: './aggiungi-evento.component.html',
  styleUrls: ['./aggiungi-evento.component.css'],

})
export class AggiungiEventoComponent implements OnInit {
  addForm!: FormGroup
  
  categorie !:any[];
  localita !:any[];

  nuovoEvento: Evento = new Evento()
  constructor(private categoriaService:CategoriaService,private localitaService:LocalitaService, private eventiService: EventiServiceService, private dialogRef: MatDialogRef<AggiungiEventoComponent>) {

    }
  ngOnInit(): void {
    this.popolaCategoria();
    this.popolaLocalita();
    //Reactive Form
    this.addForm = new FormGroup({
      nome: new FormControl(null, Validators.required),
      descrizione: new FormControl(null, Validators.required),
      prezzo: new FormControl(null, Validators.required),
      bigliettiDisponibili: new FormControl(null, Validators.required),
      idCategoria: new FormControl(null, Validators.required),
      idLocalita: new FormControl(null, Validators.required),
      data: new FormControl(null, Validators.required)
      
    }
    )
  }
  popolaCategoria(){
     this.categoriaService.getCategorie().subscribe((dato)=>{this.categorie=dato})
   
   
  }
  popolaLocalita(){
    this.localitaService.getLocalita().subscribe((dato)=>{this.localita=dato})

  }

  //Metodo onsubmit per il Reactive Forms
  onSubmit() {
    this.nuovoEvento = this.addForm.value
    this.nuovoEvento.idCategoria = 1
    this.nuovoEvento.idLocalita = 1
    this.nuovoEvento.status = 1
    this.eventiService.aggiungiEvento(this.nuovoEvento)
    this.nuovoEvento = new Evento();
    this.addForm.reset()
    this.dialogRef.close('success');
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
