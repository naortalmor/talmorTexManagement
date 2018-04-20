import { TestBed, inject } from '@angular/core/testing';

import { OredersService } from './oreders.service';

describe('OredersService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OredersService]
    });
  });

  it('should be created', inject([OredersService], (service: OredersService) => {
    expect(service).toBeTruthy();
  }));
});
