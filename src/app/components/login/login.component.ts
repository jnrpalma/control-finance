import { LoginUser } from './../../interfaces/loginUser';
import { Subject, takeUntil } from 'rxjs';
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { ContinuationRegisterComponent } from '../continuation-register/continuation-register.component';
import { ApiService } from 'src/app/services/api.service';
import { LocalstorageService } from 'src/app/services/localstorage.service';
import { PoNotificationService } from '@po-ui/ng-components';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {
 
  constructor(
    private fb: FormBuilder, 
    private dialog: MatDialog, 
    private apiService: ApiService,
    private localStorage: LocalstorageService,
    public poNotification: PoNotificationService) { }


  formRegister!: FormGroup;
  formLogin!: FormGroup;
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnInit() {
    this.initForms();
  }

  getValueControl(form: FormGroup, control: string) {
    return form.controls[control].value;
  }

  initForms() {
    this.formRegister = this.fb.group({
      name: [null, Validators.required],
      email: [null, [Validators.required, Validators.email]],
      age: [null, Validators.compose([Validators.required, Validators.min(16), Validators.max(100)])]
    })
    this.formLogin = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required, ]]
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

  login(){
    if(this.isValidForm()){
      const {email} = this.createPayload();
      this.apiService.loginUser(this.createPayload())
      .pipe(takeUntil(this.destroy$))
      .subscribe((res: LoginUser)=> {
        let {token} = res;
        this.localStorage.setLocalStorage('token', token)
        this.localStorage.setLocalStorage('user', email)
        this.poNotification.success('Login realizado com sucesso!');
      })
    }
  }

  isValidForm(): boolean {
    return this.formLogin.valid;
  }


  createPayload(
    email = this.getValueControl(this.formLogin, 'email'),
    password = this.getValueControl(this.formLogin, 'password')
  ) {
    const payload = {
      email,
      password
    }
    return payload;
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

  ngOnDestroy(): void {
    this.destroy$.next(true)
    this.destroy$.unsubscribe();
  }


}
