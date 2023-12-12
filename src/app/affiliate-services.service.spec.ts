import { TestBed } from '@angular/core/testing';

import { AffiliateServicesService } from './affiliate-services.service';

describe('AffiliateServicesService', () => {
  let service: AffiliateServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffiliateServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
