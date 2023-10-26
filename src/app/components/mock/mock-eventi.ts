import { Evento } from "src/app/models/evento.model";

export const MOCK_EVENTI: Evento[] = [
  {
    nome: "Concerto Vasco",
    descrizione: "Concerto di vasco rossi a Bologna",
    prezzo: 80,
    bigliettiDisponibili: 1000,
    categoria: "Musica",
    localita: "Palermo",
    data: new Date("2024-09-10")
  },
  {
    nome: "Inter - Juve",
    descrizione: "Finale di coppa italia",
    prezzo: 120,
    bigliettiDisponibili: 3000,
    categoria: "Sport",
    localita: "Milano",
    data: new Date("2024-12-10")
  },
  {
    nome: "Concerto Vasco",
    descrizione: "Concerto di vasco rossi a Bologna",
    prezzo: 80,
    bigliettiDisponibili: 1000,
    categoria: "Musica",
    localita: "Palermo",
    data: new Date("2024-09-10")
  }
]