import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellaPrenotazioneComponent } from './cancella-prenotazione.component';

describe('CancellaPrenotazioneComponent', () => {
  let component: CancellaPrenotazioneComponent;
  let fixture: ComponentFixture<CancellaPrenotazioneComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancellaPrenotazioneComponent]
    });
    fixture = TestBed.createComponent(CancellaPrenotazioneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
