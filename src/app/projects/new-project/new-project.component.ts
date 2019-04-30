import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { ProjectsService } from '../projects.service';
@Component({
  selector: 'app-new-project',
  templateUrl: './new-project.component.html',
  styleUrls: ['./new-project.component.css']
})
export class NewProjectComponent implements OnInit {
  public nuevoId$: any;
  public form: FormGroup;

  private readonly nameMinLength = 5;
  private readonly nameMaxLength = 15;

  constructor(private projectsService: ProjectsService, private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initForm();
  }

  public newProject() {
    this.nuevoId$ = this.projectsService.addProject(this.form.value);
  }

  private initForm() {
    this.form = this.formBuilder.group({
      name: ['', [this.validateName.bind(this)]]
    });
  }

  private validateName(control: AbstractControl) {
    const name = control.value;

    let errors = null;

    if (!/^[A-Z]/.test(name[0])) {
      errors = { ...errors, firstLetter: 'Es obligatorio que el primer caracter sea una letra mayúscula' };
    }
    if (name.length < this.nameMinLength) {
      errors = { ...errors, minLength: 'El nombre debe tener una longitud mínima de ' + this.nameMinLength };
    }
    if (name.length > this.nameMaxLength) {
      errors = { ...errors, maxLength: 'El nombre debe tener una longitud máxima de ' + this.nameMaxLength };
    }

    return errors;
  }

  public getErrors(controlName: string): Array<string> {
    const errors = Array<string>();
    const control = this.form.get(controlName);
    if (control.dirty && control.errors != null) {
      for (const propertyError of Object.getOwnPropertyNames(control.errors)) {
        errors.push(control.errors[propertyError]);
      }
    }
    return errors;
  }
}
