import { Component, OnInit } from '@angular/core';
import {GetIssueDataService} from '../services/get-issue-data.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
  providers: [GetIssueDataService]
})
export class CreateComponent implements OnInit {

  issues:any[];
  constructor( private getIssueDataService:GetIssueDataService) {
    this.getIssueDataService.getIssues()
      .subscribe(issues => {this.issues = issues;});
  }

  ngOnInit() {
  }

  onSubmit() {
  this.getIssueDataService.AddIssue(this.issues)
    .subscribe(issues => {this.issues.unshift(this.issues);})
  }
}
