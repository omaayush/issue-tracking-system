import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../../models/users';
import {GetDataService} from '../services/get-data.service';
import {observable} from 'rxjs';

@Component({
  selector: 'app-issue-card-mini',
  templateUrl: './issue-card-mini.component.html',
  styleUrls: ['./issue-card-mini.component.scss'],
  providers: [GetDataService]
})
export class IssueCardMiniComponent implements OnInit{
  public IssueData: Users[];
  //issue: Users;

  @Input() public showAssignee: boolean;
  @Input() public stat: string;
  // @Input() public statusM(): boolean;

  constructor(private kanbanDataService: GetDataService){}

  // ngOnInit(): void {
  //   this.IssueData = this.kanbanDataService.getCards();
  // }

  ngOnInit(): void {
    this.kanbanDataService.getCards()
    .subscribe(data => this.IssueData = data);

  }

  // function FilerOnlyRequiredStatusCards()
  // {
  //
  // }
}
