import { TestBed } from '@angular/core/testing';

import { AskDishcoveryService } from './ask-dishcovery.service';

describe('AskDishcoveryService', () => {
  let service: AskDishcoveryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AskDishcoveryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
