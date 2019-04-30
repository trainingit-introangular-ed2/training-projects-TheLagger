import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-new-project-form',
  templateUrl: './new-project-form.component.html',
  styleUrls: ['./new-project-form.component.css']
})
export class NewProjectFormComponent implements OnInit {
  @Input() public nuevoId$: number;
  @Input() public form: FormGroup;
  @Input() public errorFunction: Function;
  @Output() public nuevoproyecto = new EventEmitter();

  constructor() {}

  ngOnInit() {}
}
