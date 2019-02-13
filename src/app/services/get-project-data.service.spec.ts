import { TestBed } from '@angular/core/testing';

import { GetProjectDataService } from './get-project-data.service';

describe('GetProjectDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetProjectDataService = TestBed.get(GetProjectDataService);
    expect(service).toBeTruthy();
  });
});
