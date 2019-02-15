import {Component, Input, OnInit} from '@angular/core';
import { Assignee } from '../Assignee.model';

@Component({
  selector: 'app-assignee-list',
  templateUrl: './assignee-list.component.html',
  styleUrls: ['./assignee-list.component.scss']
})

export class AssigneeListComponent implements OnInit {

  gradient: {
    background: String;
  };
  @Input() assignee: Assignee;

  constructor() {
    this.gradient = {
      background: ''
    };
  }

  ngOnInit() {
    const completeIssues = this.assignee.highPriorityIssuesCount;
    const totalIssues = this.assignee.totalIssuesCount;
    const gradientComplete = completeIssues / totalIssues * 100;
    this.gradient['background'] = `linear-gradient(to right, #c500f7 ${gradientComplete}%, #e5e6f2 ${gradientComplete}% 100%)`;
  }

}
