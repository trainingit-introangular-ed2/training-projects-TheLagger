import { Component, OnInit } from '@angular/core';
import { environment } from '../../../environments/environment';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  public projectsShown: any;

  constructor(private projectsService: ProjectsService) {}

  ngOnInit() {
    this.projectsShown = environment.projects;
  }

  public filtrarProyectos(filtros: any) {
    this.projectsShown = this.projectsService.filterProjects(filtros);
  }
}
