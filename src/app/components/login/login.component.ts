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


constructor(private fb: FormBuilder, private dialog: MatDialog){

}

formRegister!: FormGroup;

ngOnInit(){
this.initForms();
}

debug(){
  console.log(this.formRegister);
}

initForms(){
  this.formRegister = this.fb.group({
    name:[null, Validators.required],
    email:[null, [Validators.required, Validators.email]],
    age:[null, Validators.required]
  })
}


openDialogRegister(){
  this.modal.open()
}

}
