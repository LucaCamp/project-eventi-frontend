import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Evento } from 'src/app/models/evento.model';
import { EventiServiceService } from 'src/app/services/eventi-service.service';

@Component({
  selector: 'app-eventi',
  templateUrl: './eventi.component.html',
  styleUrls: ['./eventi.component.css']
})
export class EventBoxComponent implements OnInit {

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
