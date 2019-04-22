import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  constructor() {}

  public addProject(project: any) {
    environment.projects.push({ ...project });
  }

  public getProjects() {
    return environment.projects;
  }

  public filterProjects(filtros: any) {
    return environment.projects.filter(project => project.name.toLowerCase().includes(filtros.name.toLowerCase()));
  }
}
