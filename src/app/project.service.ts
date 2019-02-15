import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { apiUrl } from '../assets/config';
import Project from 'src/models/Project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  endpoint = apiUrl + 'projects/';

  constructor(private http: HttpClient) { }

  // get project for an id
  getProject(id: number) {
    return this.http.get(this.endpoint + id);
  }

  // get projects
  getProjects() {
    return this.http.get(this.endpoint);
  }

  addProject(project: Project) {
    return this.http.post(this.endpoint , project);
  }

}
