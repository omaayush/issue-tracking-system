import { Component, OnInit } from '@angular/core';
import Issue from 'src/models/Issue';
import { IssueService } from '../issue.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  touchedInput  = false;
  searchResult: Issue[] = [];
  searchItem: string;

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

  onSearch(data: any) {
    this.searchItem = data.target.value;
    if (data.target.value) {
      this.issueService.searchIssues(this.searchItem).subscribe((resultData) => {
        this.searchResult = resultData as Issue[];
        console.log(this.searchResult);
      }, (error) => { console.log(error); });
    }
  }

}
