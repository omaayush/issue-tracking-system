import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../../models/users';
import {GetDataService} from '../services/get-data.service';

@Component({
  selector: 'app-issue-card-mini',
  templateUrl: './issue-card-mini.component.html',
  styleUrls: ['./issue-card-mini.component.scss'],
  providers: [GetDataService]
})
export class IssueCardMiniComponent implements OnInit{
  IssueData: Users[];
  issue: Users;

  @Input() public showAssignee: boolean;
  @Input() public stat: string;
  // @Input() public statusM(): boolean;

  constructor(private ShowKanbandataService: GetDataService){}

  ngOnInit(): void {
    this.IssueData = this.ShowKanbandataService.getCards();
  }

  // function FilerOnlyRequiredStatusCards()
  // {
  //
  // }
}
