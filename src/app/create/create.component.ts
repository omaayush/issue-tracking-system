import { Component, OnInit, Input } from '@angular/core';
import {GetIssueDataService} from '../services/get-issue-data.service';
import {FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.scss'],
})
export class CreateComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder) {
  }

  ngOnInit() {
    // this.form = new FormGroup(
    //   {
    //     project : new FormControl(),
    //     issueType : new FormControl(),
    //     title : new FormControl(),
    //     description : new FormControl(),
    //     priority : new FormControl(),
    //     assignee : new FormControl(),
    //     attachment : new FormControl(),
    //     date : new FormControl()
    //   });
    this.form = this.fb.group(
      {
            project : [''],
            issueType : [''],
            title : ['', Validators.required],
            description : [''],
            priority : [''],
            assignee : [''],
            attachment : [''],
            date : ['']
      });
  }

  onSubmit(): void {
    console.log(this.form.value);
  }

  
}












// import { Component, OnInit, Input } from '@angular/core';
// import {GetIssueDataService} from '../services/get-issue-data.service';
// import {FormGroup, FormBuilder, Validators} from '@angular/forms';
// import {Issues} from '../../models/issue';
//
// @Component({
//   selector: 'app-create',
//   templateUrl: './create.component.html',
//   styleUrls: ['./create.component.scss'],
//   providers: [GetIssueDataService]
// })
// export class CreateComponent implements OnInit {
//
//   issues: Issues[];
//   type: string[] = ['BUG', 'TASK'];
//   priority: string[] = ['HIGH', 'LOW'];
//   project: string[] = ['Project1','Project2','Project3','Project4'];
//   createForm: FormGroup;
//   formBuilder: FormBuilder;
//   submitted = false;
//   //f: any;
//
//   constructor( private getIssueDataService:GetIssueDataService) {
//     this.getIssueDataService.getIssues()
//       .subscribe(issues => {this.issues = issues;});
//   }
//
//   ngOnInit() {
//     // form to create a new issue below
//     this.formBuilder = new FormBuilder();
//     this.createForm = this.formBuilder.group({
//       title: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
//       description: ['', Validators.required],
//       status: ['', Validators.required],
//       type: ['', Validators.required],
//       project: ['', Validators.required],
//       assignee: ['', Validators.required],
//       priority: ['', Validators.required],
//       attachment: ['', Validators.required]
//     });
//
//     function formControl()
//     {
//       return this.createForm.controls;
//     }
//
//     onSubmit()
//     {
//       this.getIssueDataService.AddIssue(this.issues)
//         .subscribe(issues =>
//         {
//           this.issues.unshift(this.issues);
//         })
//
//       this.submitted = true;
//
//       // stops submission if form is invalid
//       if (this.createForm.invalid) {
//         console.log(JSON.stringify(this.createForm.value));
//         return;
//       }
//       if (this.createForm.value instanceof Issue) {
//         console.log('myObject *is* an instance of Type!');
//       } else {
//         console.log('Oops! myObject is not an instance of Type...');
//       }
//
//       // const newIssue: Issue = new Issue(this.createForm.value);
//
//       console.log(JSON.stringify(this.createForm.value));
//
//       console.log(JSON.stringify(this.createForm.value));
//
//     }
//   }
