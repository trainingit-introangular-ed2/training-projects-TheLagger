import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  public nombreProyecto: string;
  @Output() public nuevoproyecto = new EventEmitter();
  @Input() public nuevoId: string;

  constructor() {}

  ngOnInit() {}
}
