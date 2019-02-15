import { Component, OnInit, Input } from '@angular/core';
import { card } from '../../models/card';
import Issue from 'src/models/Issue';
import { UserService } from '../user.service';
import Assignee from 'src/models/Assignee';

@Component({
  selector: 'app-issue-card-mini-progress',
  templateUrl: './issue-card-mini-progress.component.html',
  styleUrls: ['./issue-card-mini-progress.component.scss']
})
export class IssueCardMiniProgressComponent implements OnInit {

  @Input() public issueData: Issue;
  @Input() public showAssignee: boolean;
  @Input() users: Assignee[] = [new Assignee(0, 'test', 'drz@gmail.com', '../assets/user_1.svg', 'tecg analyst')];
  userData: Assignee = new Assignee(0, 'test', 'drz@gmail.com', '../assets/user_1.svg', 'tecg analyst');
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
