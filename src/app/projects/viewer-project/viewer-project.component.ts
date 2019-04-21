import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { environment } from '../../../environments/environment';

@Component({
  selector: 'app-viewer-project',
  templateUrl: './viewer-project.component.html',
  styleUrls: ['./viewer-project.component.css']
})
export class ViewerProjectComponent implements OnInit {
  public project: any;

  constructor(activateRoute: ActivatedRoute) {
    this.project = environment.projects.find(project => project.id == activateRoute.snapshot.params['id']);
  }
  ngOnInit() {}
}
