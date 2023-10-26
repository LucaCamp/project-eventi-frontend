import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AggiungiEventoComponent } from './aggiungi-evento.component';

describe('AggiungiEventoComponent', () => {
  let component: AggiungiEventoComponent;
  let fixture: ComponentFixture<AggiungiEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AggiungiEventoComponent]
    });
    fixture = TestBed.createComponent(AggiungiEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
