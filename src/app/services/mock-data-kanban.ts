import {Users} from '../../models/users';
import {Projects} from '../../models/projects';
import {Issues} from '../../models/issue';

export const USERS: Users[] = [
  {
    id: 1,
    username: 'user1',
    email: 'user1@abc.com',
    profile_image: 'https://picsum.photos/100?image=10',
    role: 'UI/UX Designer'
  }

];

export const PROJECTS: Projects[] = [
  {
    id: 1,
    created_at: '2019-01-12T15:04:44.190087Z',
    updated_at: '2019-01-17T13:57:34.763967Z',
    name: 'Project 1'
  }

];

export const ISSUES: Issues[] = [
  {
    id: 1,
    description_part: 'Feel oil rock pretty whether.' +
      ' Better interesting pattern fear movie. support with painting.Feel oil rock pretty whether. ',
    description: 'Institution office forward way result raise.' +
      ' Organization low far safe manager.\nAnyone step end trade. ' +
      'Skill respond daughter. Form minute PM task several.Institution office forward' +
      ' way result raise. Organization low far safe manager.\nAnyone step end trade.' +
      ' Skill respond daughter. Form minute PM task several.' +
      'Institution office forward way result raise.' +
      ' Organization low far safe manager.\nAnyone step end trade.' +
      ' Skill respond daughter. Form minute PM task several.' +
      'Institution office forward way result raise. ' +
      'Organization low far safe manager.\nAnyone step end trade.' +
      ' Skill respond daughter. Form minute PM task several.' +
      'Institution office forward way result raise. Organization low far safe manager.' +
      '\nAnyone step end trade. Skill respond daughter. Form minute PM task several.' +
      'Institution office forward way result raise. Organization low far safe manager.' +
      '\nAnyone step end trade. Skill respond daughter. Form minute PM task several.'
    created_at: '2019-01-17T13:17:25.489974Z',
    updated_at: '2019-02-06T10:19:45.315818Z',
    title: 'Woman Central Chance Skin Interesting Government',
    status: 'In Progress',
    severity: 20,
    due_date: '2019-04-24',
    type: 'Bug',
    project: 8,
    assignee: 'Abhishek'
},

];
