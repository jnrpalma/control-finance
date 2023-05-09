import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environments } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }


  registerUser(user: any){
    const formData = new FormData();
    formData.append('name', user.name)
    formData.append('EMAIL', user.email)
    formData.append('age', user.age)
    formData.append('image', user.image)
    formData.append('password', user.password)
    formData.append('confirmPassword', user.confirmPassword)

    return this.httpClient.post(environments.BASE_URL + '/auth/register/user', formData)
    .pipe(
      catchError((err) => {
        if(err.status === 0 && err.status != 404){
      console.error('ocorreu um erro na aplicão, tente novamente!')
        } else if(err.status === 404){
          console.error('err.error.mensage')
        }else {
          console.error('ocorreu um erro no servidor')
        }
        return throwError(() => err)
      })
    )
  }
}
