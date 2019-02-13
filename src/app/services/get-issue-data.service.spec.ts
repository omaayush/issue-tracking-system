import { TestBed } from '@angular/core/testing';

import { GetIssueDataService } from './get-issue-data.service';

describe('GetIssueDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GetIssueDataService = TestBed.get(GetIssueDataService);
    expect(service).toBeTruthy();
  });
});
