import { Component, OnInit } from '@angular/core';
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
    this.projectsShown = this.projectsService.getProjects();
  }

  public filtrarProyectos(filtros: any) {
    this.projectsShown = this.projectsService.filterProjects(filtros);
  }
}
