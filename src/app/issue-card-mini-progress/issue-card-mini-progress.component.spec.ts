import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IssueCardMiniProgressComponent } from './issue-card-mini-progress.component';

describe('IssueCardMiniProgressComponent', () => {
  let component: IssueCardMiniProgressComponent;
  let fixture: ComponentFixture<IssueCardMiniProgressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IssueCardMiniProgressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IssueCardMiniProgressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
