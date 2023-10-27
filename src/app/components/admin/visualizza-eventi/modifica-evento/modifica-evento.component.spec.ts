import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificaEventoComponent } from './modifica-evento.component';

describe('ModificaEventoComponent', () => {
  let component: ModificaEventoComponent;
  let fixture: ComponentFixture<ModificaEventoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificaEventoComponent]
    });
    fixture = TestBed.createComponent(ModificaEventoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
