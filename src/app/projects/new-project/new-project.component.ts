import { Component, OnInit } from '@angular/core';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public nuevoId$: any;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {}

  public newProject(data: any) {
    this.nuevoId$ = this.projectsService.addProject(data);
  }
}
