import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizzaEventiComponent } from './visualizza-eventi.component';

describe('VisualizzaEventiComponent', () => {
  let component: VisualizzaEventiComponent;
  let fixture: ComponentFixture<VisualizzaEventiComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VisualizzaEventiComponent]
    });
    fixture = TestBed.createComponent(VisualizzaEventiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
