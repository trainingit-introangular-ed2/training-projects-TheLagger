import { Component, Input, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  public projects_$: any;
  public dataSource = new MatTableDataSource();

  @Input() set projects$(projects) {
    this.projects_$ = projects;
    this.dataSource = this.projects_$;
  }

  displayedColumns: string[] = ['name'];

  constructor() {}

  ngOnInit() {
    this.dataSource = this.projects_$;
  }
}
