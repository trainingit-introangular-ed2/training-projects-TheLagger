import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public project: any;
  public nuevoId: number;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {}

  public newProject(data: any) {
    this.projectsService.addProject(data);
    this.nuevoId = data.id;
  }
}
