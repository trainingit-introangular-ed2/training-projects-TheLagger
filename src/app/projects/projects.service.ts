import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProjectsService {
  private urlapi = 'https://api-base.herokuapp.com/api/pub/projects';

  constructor(private httpClient: HttpClient) {}

  public addProject(project: any) {
    return this.httpClient.post(this.urlapi, project).pipe(map((projectAdded: any) => projectAdded._id));
  }

  public getProjects() {
    return this.httpClient.get(this.urlapi);
  }

  public getProject(id: number) {
    return this.httpClient.get(this.urlapi).pipe(map((projects: any) => projects.filter(project => project._id == id)));
  }

  public filterProjects(filtros: any) {
    return this.httpClient
      .get(this.urlapi)
      .pipe(
        map((projects: any) => projects.filter(project => project.name.toLowerCase().includes(filtros.name.toLowerCase())))
      );
  }

  public numOfProyects() {
    return this.httpClient.get(this.urlapi).pipe(map((projects: any) => projects.length));
  }
}
