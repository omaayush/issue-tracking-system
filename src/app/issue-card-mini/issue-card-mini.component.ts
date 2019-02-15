import { Component, OnInit, Input } from '@angular/core';
import { card } from '../../models/card';
import Issue from 'src/models/Issue';
import { UserService } from '../user.service';
import Assignee from 'src/models/Assignee';

@Component({
  selector: 'app-issue-card-mini',
  templateUrl: './issue-card-mini.component.html',
  styleUrls: ['./issue-card-mini.component.css']
})
export class IssueCardMiniComponent implements OnInit {

  @Input() public issueData: Issue;
  @Input() public showAssignee: boolean;
  @Input() users: Assignee[] = [new Assignee(0, 'Not Assigned', 'drz@gmail.com', '../assets/Create_dark.svg', 'Not Assigned')];
  userData: Assignee = new Assignee(0, 'Not Assigned', 'drz@gmail.com', '../assets/Create_dark.svg', 'Not Assigned');
  priority: string[] = ['Low Priority', 'Medium Priority', 'High Priority'];
  priorityStyles: string[] = ['low', 'medium', 'high'];
  constructor(userService: UserService) {
    // this.userService = userService;
  }
  ngOnInit() {
    // this.getUsers();
  }

  // gets users from user service
  // getUsers() {
  //   this.userService.getUsers().subscribe((data) => {
  //     this.users = data as Assignee[];
  //   }, (error) => { console.log(error); });
  // }

  parse(users: Assignee[], value: string) {
    if ( users && value) {
      this.userData = users[parseInt(value, 10) - 1];
    }
    return this.userData;
  }



}
