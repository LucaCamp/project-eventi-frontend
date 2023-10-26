import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConvalidaPrenotazioneComponent } from './convalida-prenotazione.component';

describe('ConvalidaPrenotazioneComponent', () => {
  let component: ConvalidaPrenotazioneComponent;
  let fixture: ComponentFixture<ConvalidaPrenotazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ConvalidaPrenotazioneComponent]
    });
    fixture = TestBed.createComponent(ConvalidaPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
