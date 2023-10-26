import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaUtentiComponent } from './visualizza-utenti.component';

describe('VisualizzaUtentiComponent', () => {
  let component: VisualizzaUtentiComponent;
  let fixture: ComponentFixture<VisualizzaUtentiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizzaUtentiComponent]
    });
    fixture = TestBed.createComponent(VisualizzaUtentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
