import { TestBed } from '@angular/core/testing';

import { LoadFixtureService } from './load-fixture.service';

describe('LoadFixtureService', () => {
  let service: LoadFixtureService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LoadFixtureService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
