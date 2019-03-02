export interface Issues {
  id: number;
  description_part: string;
  // description: string;
  created_at: string;
  updated_at: string;
  title: string;
  status: string;
  severity: number;
  due_date: string;
  type: string;
  project: number;
  assignee: number;
}
