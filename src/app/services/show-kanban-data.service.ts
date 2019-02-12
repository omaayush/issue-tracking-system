import { Injectable } from '@angular/core';
import {CARDS} from './mock-data-kanban';
import {card} from '../../models/card';

@Injectable({
  providedIn: 'root'
})
export class ShowKanbanDataService {

  constructor() { }

  getCards(): card[] {
    return CARDS;
  }
}
