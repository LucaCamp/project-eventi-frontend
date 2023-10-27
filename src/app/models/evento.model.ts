export class Evento {
  id!: number;
  nome!: string;
  descrizione!: string;
  prezzo!: number;
  bigliettiDisponibili!: number;
  idCategoria!: number;
  idLocalita!: number;
  status!: number | null;
  data!: Date;
}