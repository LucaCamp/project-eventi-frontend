import { TestBed } from '@angular/core/testing';

import { LocalitaService } from './localita.service';

describe('LocalitaService', () => {
  let service: LocalitaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LocalitaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
