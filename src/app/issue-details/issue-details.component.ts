import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetIssueDataService} from '../services/get-issue-data.service';
import Issues from '../../models/issue';
import {Priority} from '../../models/priority';
import {IssueType} from '../../models/issueType';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
  issues: Issues[];
  public issue: Issues = new Issues();

  // enums for use in template
  priority = Priority;
  issueType = IssueType;
  id: number;


  constructor(private issueService: GetIssueDataService, private route: ActivatedRoute) {
    this.route.params.subscribe(
      params => {
      this.id = params['id'];
      this.getIssue();
    });
  }
  ngOnInit() {
    // this.id = this.route.snapshot.params['id'];
    // this.issueService.getIssue(this.id);
    //   .subscribe(data => this.issues = data);
  }

  // gets issues from service
  getIssue() {
    this.issueService.getIssue(this.id)
      .subscribe((data) => {
      this.issue = data as Issues;
    },
        (error) => { console.log(error); });
  }

  // // converts js long date to beautiful date
  // getBeautifulDate(date: Date): string {
  //   return date.getHours() + ':' + date.getMinutes() + ' ' + date.getDate() + '/' + date.getMonth() + '/' + date.getFullYear();
  // }


}
