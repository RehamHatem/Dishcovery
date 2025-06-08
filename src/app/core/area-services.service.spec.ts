import { TestBed } from '@angular/core/testing';

import { AreaServicesService } from './area-services.service';

describe('AreaServicesService', () => {
  let service: AreaServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AreaServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
