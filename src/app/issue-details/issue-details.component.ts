import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {GetIssueDataService} from '../services/get-issue-data.service';
import {Issues} from '../../models/issue';

@Component({
  selector: 'app-issue-details',
  templateUrl: './issue-details.component.html',
  styleUrls: ['./issue-details.component.scss']
})
export class IssueDetailsComponent implements OnInit {
  public issues: Issues[];
  public id: any;
  constructor(private route: ActivatedRoute,
              private getIssueDataService: GetIssueDataService) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getIssueDataService.getIssuesById(this.id)
      .subscribe(data => this.issues = data);
  }

}
