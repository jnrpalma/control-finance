import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


constructor(private fb: FormBuilder){

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

}
