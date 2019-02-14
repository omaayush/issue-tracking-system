import { Component, OnInit, Input } from '@angular/core';
import { Users } from '../../models/users';
import {GetUserDataService} from '../services/get-user-data.service';
import {observable} from 'rxjs';
import Issues from '../../models/issue';
import {GetIssueDataService} from '../services/get-issue-data.service';

@Component({
  selector: 'app-issue-card-mini',
  templateUrl: './issue-card-mini.component.html',
  styleUrls: ['./issue-card-mini.component.scss'],
  providers: [GetUserDataService]
})
export class IssueCardMiniComponent implements OnInit{

  @Input() public issueData: Issues;
  @Input() public showAssignee: boolean;
  @Input() public stat: string;
  // public issues: Issues[];
  //public users: Users[];
  //issue: Users;


  // @Input() public statusM(): boolean;

  // constructor(private getIssueDataService: GetIssueDataService){}
  constructor(){}
  // ngOnInit(): void {
  //   this.users = this.getIssueDataService.getUsers();
  // }

  ngOnInit(): void {
    // this.getIssueDataService.getIssues()
    // .subscribe(data => this.issues = data);
  }

}
