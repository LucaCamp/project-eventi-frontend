import { Prenotazione } from "src/app/models/prenotazione.model";

export const MOCK_PRENOTAZIONI: Prenotazione[] = [
  {
    id: 1,
    data: new Date("2009-02-16"),
    idUtente: 1,
    quantitaPrenotata: 1,
    isConvalidata: false,
    prezzoTotale: 240,
    idEvento: 1,
    cancellata: false,
  },
  {
    id: 2,
    data: new Date("2009-02-16"),
    idUtente: 1,
    quantitaPrenotata: 1,
    isConvalidata: true,
    prezzoTotale: 240,
    idEvento: 1,
    cancellata: false,
  },
  {
    id: 3,
    data: new Date("2009-02-16"),
    idUtente: 1,
    quantitaPrenotata: 1,
    isConvalidata: true,
    prezzoTotale: 240,
    idEvento: 1,
    cancellata: false
  }
]