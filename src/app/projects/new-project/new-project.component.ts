import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public projectName: string;
  public numProyectos = 0;

  constructor() {}

  ngOnInit() {
    this.numProyectos = environment.projects.length;
  }

  public newProject() {
    const id = environment.projects.length;
    const name = this.projectName;
    const nuevoProyecto = { id, name };
    environment.projects.push(nuevoProyecto);
    this.numProyectos = environment.projects.length;
  }
}
