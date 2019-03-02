import { TestBed } from '@angular/core/testing';

import { AssigneeService } from './assignee.service';

describe('AssigneeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AssigneeService = TestBed.get(AssigneeService);
    expect(service).toBeTruthy();
  });
});
