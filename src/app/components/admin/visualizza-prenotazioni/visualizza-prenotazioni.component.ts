/* 
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { PrenotazioniService } from 'src/app/services/prenotazioni.service';
import { CancellaPrenotazioneComponent } from './cancella-prenotazione/cancella-prenotazione.component';
import { ConvalidaPrenotazioneComponent } from './convalida-prenotazione/convalida-prenotazione.component';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria.model';
import { Observable } from 'rxjs';
import { EventiServiceService } from 'src/app/services/eventi-service.service';
import { Evento } from 'src/app/models/evento.model';

@Component({
  selector: 'app-visualizza-prenotazioni',
  templateUrl: './visualizza-prenotazioni.component.html',
  styleUrls: ['./visualizza-prenotazioni.component.css']
})
export class VisualizzaPrenotazioniComponent {
  listaPrenotazioni: Prenotazione[];
  categoria: Observable<Categoria> | undefined;
  prenotazioniService;



  constructor(private eventoService: EventiServiceService,
    private readonly dialog: MatDialog, prenotazioniService: PrenotazioniService) {
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
*/
import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Prenotazione } from 'src/app/models/prenotazione.model';
import { PrenotazioniService } from 'src/app/services/prenotazioni.service';
import { CancellaPrenotazioneComponent } from './cancella-prenotazione/cancella-prenotazione.component';
import { ConvalidaPrenotazioneComponent } from './convalida-prenotazione/convalida-prenotazione.component';
import { CategoriaService } from 'src/app/services/categoria.service';
import { Categoria } from 'src/app/models/categoria.model';
import { Observable } from 'rxjs';
import { EventiServiceService } from 'src/app/services/eventi-service.service';
import { Evento } from 'src/app/models/evento.model';

@Component({
selector: 'app-visualizza-prenotazioni',
templateUrl: './visualizza-prenotazioni.component.html',
styleUrls: ['./visualizza-prenotazioni.component.css']
})
export class VisualizzaPrenotazioniComponent {
listaPrenotazioni: Prenotazione[];
categoria: Observable<Categoria> | undefined;
prenotazioniService;



constructor(private eventoService: EventiServiceService,
private readonly dialog: MatDialog, prenotazioniService: PrenotazioniService) {
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