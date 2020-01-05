import { TestBed } from '@angular/core/testing';

import { CaracterService } from './caracter.service';

describe('CaracterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CaracterService = TestBed.get(CaracterService);
    expect(service).toBeTruthy();
  });
});
