import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaPrenotazioniComponent } from './visualizza-prenotazioni.component';

describe('VisualizzaPrenotazioniComponent', () => {
  let component: VisualizzaPrenotazioniComponent;
  let fixture: ComponentFixture<VisualizzaPrenotazioniComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizzaPrenotazioniComponent]
    });
    fixture = TestBed.createComponent(VisualizzaPrenotazioniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
