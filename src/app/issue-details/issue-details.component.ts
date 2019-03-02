import { Component, OnInit, Input } from '@angular/core';
import Issue from 'src/models/Issue';
import { Priority } from 'src/models/Priority';
import { IssueService } from '../issue.service';
import { MOCK_DATA } from '../Mockdata';
import { ActivatedRoute, Router } from '@angular/router';
import { IssueType } from 'src/models/IssueType';
import { UserService } from '../user.service';
import { ProjectService } from '../project.service';
import Assignee from 'src/models/Assignee';
import Project from 'src/models/Project';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.css']
})
export class IssueDetailsComponent implements OnInit {

  @Input() issue: Issue = new Issue();
  issues: Issue[];
  user: Assignee = new Assignee(1, 'test', 'test', 'test', 'test');
  project: Project = new Project(1, new Date(), new Date(), 'test');

  // enums for use in template
  priority = Priority;
  issueType = IssueType;
  id: number;

  // services instance
  userService: UserService;
  projectService: ProjectService;

  constructor(private router: Router, private issueService: IssueService, private route: ActivatedRoute,
    userService: UserService, projectService: ProjectService) {
    this.userService = userService;
    this.projectService = projectService;
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getIssue();
      // console.log( this.issues);
      // console.log(this.issue['project'] + 'issue');
      // if (this.issue['assignee']) { this.getUser(); }
      // if (this.issue['project']) { this.getProject(); }
   });
   }

  ngOnInit() {
  }

  // gets issues from service
  getIssue() {
    this.issueService.getIssue(this.id).subscribe((data) => {
      this.issue = data as Issue;
      this.getUser();
      this.getProject();
      // console.log('got ' + this.issue);
    }, (error) => { console.log(error); });
  }

  // converts js long date to beautiful date
  getBeautifulDate(date: Date): string {
    return date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  }

  // gets users from user service
  getUser() {
    this.userService.getUser(this.issue.assignee).subscribe((data) => {
      this.user = data as Assignee;
      console.log('fdgguhugv' + JSON.stringify(this.user));
    }, (error) => { console.log(error); });
  }

  // gets projects from project service
  getProject() {
    this.projectService.getProject(this.issue.project).subscribe((data) => {
      this.project = data as Project;
      console.log(this.project);
    }, (error) => { console.log(error); });
  }

  deleteIssue() {
    if (window.confirm('Are sure you want to delete this issue ?')) {
      this.issueService.deleteIssue(this.issue).subscribe((data) => {
        window.alert('deleted');
        this.router.navigateByUrl('/issues');
      }, (error) => { console.log(error); this.router.navigateByUrl('/issues'); });
     }
  }

  editIssue() {

  }

}
