import { Component, OnInit, Input } from '@angular/core';
import { card } from '../../models/card';
import {ShowKanbanDataService} from '../services/show-kanban-data.service';

@Component({
  selector: 'app-issue-card-mini',
  templateUrl: './issue-card-mini.component.html',
  styleUrls: ['./issue-card-mini.component.scss'],
  providers: [ShowKanbanDataService]
})
export class IssueCardMiniComponent implements OnInit{
  IssueData: card[];
  issue: card;

  @Input() public showAssignee: boolean;
  @Input() public stat: string;
  // @Input() public statusM(): boolean;

  constructor(private ShowKanbandataService: ShowKanbanDataService){}

  ngOnInit(): void {
    this.IssueData = this.ShowKanbandataService.getCards();
  }

  // statusM():boolean{
  //   this.issue=this.ShowKanbandataService.getCards();
  //   if (this.issue.status == this.stat)
  //     return true;
  // }
}
