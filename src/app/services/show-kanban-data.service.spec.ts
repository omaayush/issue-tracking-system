import { TestBed } from '@angular/core/testing';

import { ShowKanbanDataService } from './show-kanban-data.service';

describe('ShowKanbanDataService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ShowKanbanDataService = TestBed.get(ShowKanbanDataService);
    expect(service).toBeTruthy();
  });
});
