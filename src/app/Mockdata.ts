import Issue from 'src/models/Issue';
import { IssueType } from 'src/models/IssueType';
import { Priority } from 'src/models/Priority';
import { IssueStatus, IssueSeverity } from 'src/models/IssueStatus';

const MOCK_DATA = {
    ISSUE:  [
            new Issue({
                id: 1,
                description_part: 'Feel oil rock pretty whether. Better interestin pattern'
                 + 'fear movie support with painting.Feel oil rock pretty whether',
                created_at: new Date('2019-01-17T13:17:25.489974Z'),
                updated_at: new Date('2019-02-06T10:19:45.315818Z'),
                title: 'Woman Central Chance Skin Interesting Government',
                status: 'In Progress',
                severity: 2,
                due_date: new Date('2019-04-24'),
                type: 0,
                project: 8,
                assignee: null
            }),
            new Issue({
                id: 2,
                description_part: 'Feel oil rock pretty whether. Better interestin pattern'
                 + 'fear movie support with painting.Feel oil rock pretty whether',
                created_at: new Date('2019-01-17T13:17:25.489974Z'),
                updated_at: new Date('2019-02-06T10:19:45.315818Z'),
                title: 'Woman Central Chance Skin Interesting Government',
                status: 'In Progress',
                severity: 2,
                due_date: new Date('2019-04-24'),
                type: 0,
                project: 8,
                assignee: null
            }),
            new Issue({
                id: 3,
                description_part: 'Feel oil rock pretty whether. Better interestin pattern'
                 + 'fear movie support with painting.Feel oil rock pretty whether',
                created_at: new Date('2019-01-17T13:17:25.489974Z'),
                updated_at: new Date('2019-02-06T10:19:45.315818Z'),
                title: 'Woman Central Chance Skin Interesting Government',
                status: 'In Progress',
                severity: 2,
                due_date: new Date('2019-04-24'),
                type: 0,
                project: 8,
                assignee: null
            }),
            new Issue({
                id: 4,
                description_part: 'Feel oil rock pretty whether. Better interestin pattern'
                 + 'fear movie support with painting.Feel oil rock pretty whether',
                created_at: new Date('2019-01-17T13:17:25.489974Z'),
                updated_at: new Date('2019-02-06T10:19:45.315818Z'),
                title: 'Woman Central Chance Skin Interesting Government',
                status: 'In Progress',
                severity: 2,
                due_date: new Date('2019-04-24'),
                type: 0,
                project: 8,
                assignee: null
            })
    ],
    PROJECT: [
        {
            id: 20001,
            name: 'HU-Chat-Project',
        },
        {
            id: 20002,
            name: 'HU-DevOps-Project',
        },
        {
            id: 20003,
            name: 'HU-Dev-Project',
        },
        {
            id: 20004,
            name: 'HU-Final-Project',
        },
    ],
    ASSIGNEE: [
        {
            id: 30001,
            name: 'Rohan Aggarwal',
            designation: 'Technical Analyst',
        },
        {
            id: 30002,
            name: 'Mohan Aggarwal',
            designation: 'Sr. Technical Analyst',
        },
        {
            id: 30003,
            name: 'Ishaan Kumar',
            designation: 'UX Designer',
        },
        {
            id: 30004,
            name: 'Aditya Kumar',
            designation: 'Delivery Manager',
        },
    ]
};

export { MOCK_DATA };
