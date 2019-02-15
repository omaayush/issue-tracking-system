import { IssueType } from './IssueType';
import { Priority } from './Priority';
import Model from './Model';
import { IssueStatus, IssueSeverity } from './IssueStatus';

export default class Issue extends Model {

    id: number;
    description_part: string;
    description: string;
    created_at: Date;
    updated_at: Date;
    title: string;
    status: string;
    severity: Priority;
    due_date: Date;
    type: IssueType;
    project: number;
    assignee: number;
    // priority: Priority;
    // attachment: string;


    // constructor(id: number, description_part: string, created_at: Date, updated_at: Date,
    //     title: string, status: string, severity: Priority, dueDate: Date, type: IssueType,
    //     projectId: number, assigneeId: number) {
    //     super();
    //     this.id = id;
    //     this.description_part = description_part;
    //     this.created_at = created_at;
    //     this.updated_at = updated_at;
    //     this.title = title;
    //     this.status = status;
    //     this.severity = severity;
    //     this.due_date = dueDate;
    //     this.type = type;
    //     this.projectId = projectId;
    //     this.assigneeId = assigneeId;
    // }


    public constructor(init?: Partial<Issue >) {
        super();
        Object.assign(this, init);
    }

        //  "id": 1,
        // "description_part": "Feel oil rock pretty whether. Better interesting
        //                      pattern fear movie support with painting.Feel oil rock pretty whether. ",
        // "created_at": "2019-01-17T13:17:25.489974Z",
        // "updated_at": "2019-02-06T10:19:45.315818Z",
        // "title": "Woman Central Chance Skin Interesting Government",
        // "status": "In Progress",
        // "severity": 20,
        // "due_date": "2019-04-24",
        // "type": "Bug",
        // "project": 8,
        // "assignee": null
}
