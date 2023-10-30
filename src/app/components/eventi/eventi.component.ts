import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { Evento } from 'src/app/models/evento.model';
import { EventiServiceService } from 'src/app/services/eventi-service.service';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css'],
  styles: [
    'h1 { font-family: "Poppins", sans-serif; font-size: 30px; }',
    'h2 { font-family: "Poppins", sans-serif; font-size: 28px; }'
  ],
})
export class EventBoxComponent implements OnInit {
  short!: string;
  shortDate: string | undefined;
  eventiService;
  listaEventi: any | undefined;

  constructor(eventiService: EventiServiceService, private http: HttpClient) {
    this.eventiService = eventiService;
  }

  getEventi() {
    this.eventiService.getEventi().subscribe((data: any) => {
      if (data) {
        this.listaEventi = data;
      }
    })
  }
  ngOnInit(): void {
    this.getEventi();
  }
}
