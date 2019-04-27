import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjectsService } from '../projects.service';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public project$: any;

  constructor(activateRoute: ActivatedRoute, projectsService: ProjectsService) {
    this.project$ = projectsService.getProject(activateRoute.snapshot.params['id']);
  }
  ngOnInit() {}
}
