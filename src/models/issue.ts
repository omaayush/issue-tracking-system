import { IssueType } from './issueType';
import { Priority } from './priority';
import Model from './model';

export default class Issues extends Model {

  id: number;
  description:string;
  description_part: string;
  created_at: Date;
  updated_at: Date;
  title: string;
  status: string;
  severity: Priority;
  due_date: Date;
  type: IssueType;
  project: number;
  assignee: number;

  public constructor(init?: Partial<Issues >) {
    super();
    Object.assign(this, init);
  }
}
