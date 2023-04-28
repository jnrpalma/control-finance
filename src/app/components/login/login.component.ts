import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContinuationRegisterComponent } from '../continuation-register/continuation-register.component';
import { PoModalComponent } from '@po-ui/ng-components';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  @ViewChild(PoModalComponent, { static: true }) modal!: PoModalComponent; // Obtenção do PoModalComponent usando ViewChild
  // @ViewChild('modalContinuationRegister', { static: true }) modalContinuationRegister!: PoModalComponent;

  constructor(private fb: FormBuilder, private dialog: MatDialog) { }

  formRegister!: FormGroup;

  ngOnInit() {
    this.initForms();
    console.log(this.getValueControl(this.formRegister, 'name'))
  }

  getValueControl(form: FormGroup, control: string) {
    return form.controls[control].value;
  }

  initForms() {
    this.formRegister = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      age: [null, Validators.required]
    })
  }

  openDialogRegister() {
    this.dialog.open(ContinuationRegisterComponent, {
      width: '600px',
      autoFocus: false,
      maxHeight: '90vh',
      data: {
        data: this.createDataDialog()
      }
    })
   
  }

  createDataDialog(
    name = this.getValueControl(this.formRegister, 'name'),
    email = this.getValueControl(this.formRegister, 'email'),
    age = this.getValueControl(this.formRegister, 'age')) {

    const dataDialog = {
      name,
      email,
      age
    }
    return dataDialog;
  }

}
