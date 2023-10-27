import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CancellaEventoComponent } from './cancella-evento.component';

describe('CancellaEventoComponent', () => {
  let component: CancellaEventoComponent;
  let fixture: ComponentFixture<CancellaEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CancellaEventoComponent]
    });
    fixture = TestBed.createComponent(CancellaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
