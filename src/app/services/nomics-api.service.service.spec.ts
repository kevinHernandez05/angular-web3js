import { TestBed } from '@angular/core/testing';

import { NomicsApi } from './nomics-api.service';

describe('NomicsApi.ServiceService', () => {
  let service: NomicsApi;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NomicsApi);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
