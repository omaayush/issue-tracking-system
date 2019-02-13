import { Injectable } from '@angular/core';
import {USERS} from './mock-data-kanban';
import {Users} from '../../models/users';

@Injectable({
  providedIn: 'root'
})
export class GetDataService {

  constructor() { }

  getCards(): Users[] {
    return USERS;
  }


}
