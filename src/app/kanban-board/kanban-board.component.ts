import { Component, OnInit, Input } from '@angular/core';
import Issue from 'src/models/Issue';
import { IssueService } from '../issue.service';
import { IssueStatus } from 'src/models/IssueStatus';
import { UserService } from '../user.service';
import Assignee from 'src/models/Assignee';
import Project from 'src/models/Project';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-kanban-board',
  templateUrl: './kanban-board.component.html',
  styleUrls: ['./kanban-board.component.css']
})
export class KanbanBoardComponent implements OnInit {

  public heading: string;
  public showAssignee = false;
  issues: Issue[];
  selectedIssue: Issue;
  toDoIssue: Issue[];
  inProgressIssue: Issue[];
  doneIssues: Issue[];
  public users: Assignee[];
  projects: Project[] = [];
  selectedProject: string;
  selectedUser: string;

  // services instance
  issueService: IssueService;
  userService: UserService;
  projectService: ProjectService;


  constructor(issueService: IssueService, userService: UserService, projectService: ProjectService) {
    this.showAssignee = true;
    this.issueService = issueService;
    this.userService = userService;
    this.projectService = projectService;
  }
  ngOnInit() {
    this.getIssues();
    this.getUsers();
    this.getProjects();
  }

  onSelect(issue: Issue): void {
    this.selectedIssue = issue;
  }
  // gets issues from issue service
  getIssues() {
    this.issueService.getIssues(20).subscribe((data) => {
      this.issues = data['results'] as Issue[];
    }, (error) => { console.log(error); });

    this.issueService.getIssuesByStatusOrderByCreateDate(20, IssueStatus.OPEN).subscribe((data) => {
      this.toDoIssue = data['results'] as Issue[];
    }, (error) => { console.log(error); });

    this.issueService.getIssuesByStatusOrderByCreateDate(20, IssueStatus.IN_PROGRESS).subscribe((data) => {
      this.inProgressIssue = data['results'] as Issue[];
    }, (error) => { console.log(error); });

    this.issueService.getIssuesByStatusOrderByCreateDate(20, IssueStatus.RESOLVED).subscribe((data) => {
      this.doneIssues = data['results'] as Issue[];
    }, (error) => { console.log(error); });
  }

  // gets users from user service
  getUsers() {
    this.userService.getUsers().subscribe((data) => {
      this.users = data as Assignee[];
      console.log(this.users);
    }, (error) => { console.log(error); });
  }

  // gets projects from project service
  getProjects() {
    this.projectService.getProjects().subscribe((data) => {
      this.projects = data as Project[];
      console.log(this.projects);
    }, (error) => { console.log(error); });
  }

  onProjectChange(data: any) {
    this.selectedProject = data;
    let param = '?' + 'project=' + this.selectedProject;
    if (this.selectedUser) {
      param = param + '&assignee=' + this.selectedUser;
    }
    this.updateIssueData(param);
  }

  onAssigneeChange(data: any) {
    this.selectedUser = data;
    let param = '?' + 'assignee=' + this.selectedUser;
    if (this.selectedProject) {
      param = param + '&project=' + this.selectedProject;
    }
    this.updateIssueData(param);
  }

  updateIssueData(param: string) {
    console.log(param);
    this.issueService.getIssueByCustomParam(param + '&status=Open&ordering=-created_at').subscribe((updatedata) => {
      this.toDoIssue = updatedata as Issue[];
    }, (error) => { console.log(error); });

    this.issueService.getIssueByCustomParam(param + '&status=In%20Progress&ordering=-created_at').subscribe((updatedata) => {
      this.inProgressIssue = updatedata as Issue[];
    }, (error) => { console.log(error); });

    this.issueService.getIssueByCustomParam(param + '&status=Resolved&ordering=-created_at').subscribe((updatedata) => {
      this.doneIssues = updatedata as Issue[];
    }, (error) => { console.log(error); });
  }


}
