import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import Issue from 'src/models/Issue';
import { IssueService } from '../issue.service';
import { UserService } from '../user.service';
import { ProjectService } from '../project.service';
import Project from 'src/models/Project';
import Assignee from 'src/models/Assignee';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  // Array of string corrosponding to enums type and priority
  type: string[] = ['BUG', 'TASK'];
  priority: string[] = ['HIGH', 'LOW'];

  createForm: FormGroup;
  formBuilder: FormBuilder;
  submitted = false;

  issues: Issue[] = [];
  projects: Project[] = [];
  users: Assignee[] = [];

  // services instance
  issueService: IssueService;
  userService: UserService;
  projectService: ProjectService;


  constructor(issueService: IssueService, userService: UserService, projectService: ProjectService, private router: Router) {
    this.userService = userService;
    this.issueService = issueService;
    this.projectService = projectService;
  }

  ngOnInit() {
    // form to create a new issue below
    this.formBuilder = new FormBuilder();
    this.createForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
      description: ['', Validators.required],
    //  status: ['', Validators.required],
      type: ['', Validators.required],
      project: ['', Validators.required],
      assignee: ['', Validators.required],
      severity: ['', Validators.required],
      date: ['', Validators.required]
      // attachment: ['', Validators.required]
    });

    // call services get method
    this.getIssues();
    this.getProjects();
    this.getUsers();
  }

  // convenience getter for easy access to form fields
  get f() { return this.createForm.controls; }

  getIssues() {
    this.issueService.getIssues(Number.MAX_VALUE).subscribe((data) => {
      this.issues = data as Issue[];
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

  onSubmit() {
    this.submitted = true;

    // stops submission if form is invalid
    if (this.createForm.invalid) {
      console.log(JSON.stringify(this.createForm.value));
      return;
    }
    let newIssue = this.createForm.value as any;
    newIssue = newIssue as Issue;

    console.log(newIssue);

    this.issueService.addIssue(newIssue).subscribe(data => {
      console.log('Added' + data['id'] + data['title']);
      this.router.navigate(['/issues', data['id']]);
    }, (error) => {
      console.log(error);
      window.alert('check console');
    });
  }
}
