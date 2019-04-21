import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public nuevoId: string;
  public project: any;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.project = { id: environment.projects.length, name };
    this.nuevoId = '';
  }

  public newProject(data: any) {
    this.project.name = data.name;
    this.projectsService.addProject(this.project);
    this.nuevoId = this.project.id;
    this.project.id++;
  }
}
