import { IssueType } from './issueType';
import { Priority } from './priority';
import Model from './model';

export default class Issue_Details extends Model {

  id: number;
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

  public constructor(init?: Partial<Issue_Details >) {
    super();
    Object.assign(this, init);
  }
}
