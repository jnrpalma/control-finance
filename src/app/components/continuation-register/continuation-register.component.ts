import { Component, Inject, OnInit, ViewChild,  } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
@Component({
  selector: 'app-continuation-register',
  templateUrl: './continuation-register.component.html',
  styleUrls: ['./continuation-register.component.scss']
})
export class ContinuationRegisterComponent implements OnInit  {
form!: FormGroup;
preview!: any
isDefault = true;
isDefaultImage = '../../../assets/images/default.png'

constructor(
  @Inject(MAT_DIALOG_DATA) public data: any,
  private fb: FormBuilder) {

}
  ngOnInit() {
   console.log('dados do cadastro inicial', this.data)
   this.initForm();
  }

  initForm() { 
    this.form = this.fb.group({
      name: [this.data.data?.name, Validators.required],
      email: [this.data.data?.email, [Validators.required, Validators.email]],
      age: [this.data.data?.age, [Validators.required]],
      
      avatar: [null, [Validators.required]],
      password: [null, [Validators.required]],
      confirmPassword: [null, [Validators.required]],

    })
  }

  onChange(event: any) { 
    if(event.target.files && event.target.files.length > 0) {
      this.isDefault = false;
      const file = event.target.files[0]; 
      
      const reader = new FileReader();

      reader.onload = (e) => (this.preview = reader.result);
      reader.readAsDataURL(file);

      this.form.patchValue({
        avatar: file
      })
    }
  }

}
