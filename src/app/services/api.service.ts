import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, retry, throwError } from 'rxjs';
import { environments } from 'src/environments/environments';
import { RegisterUser } from '../interfaces/registerUser';
import { PoNotificationService } from '@po-ui/ng-components';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient, public poNotification: PoNotificationService) { }

  handleError(err: any): Observable<any> {
    if (err.status === 0 && err.status != 404) {
      this.poNotification.error('O servidor não está respondendo. Por favor, verifique sua conexão de internet e tente novamente');
      return throwError(() => err);
    } else if (err.status === 400) {
      this.poNotification.error('Solicitação inválida');
      return throwError(() => err);
    } else if (err.status === 401) {
      this.poNotification.error('Não autorizado');
      return throwError(() => err);
    } else if (err.status === 403) {
      this.poNotification.error('Acesso proibido');
      return throwError(() => err);
    } else if (err.status === 404) {
      this.poNotification.error(err.error.message);
      return throwError(() => err);
    } else if (err.status === 500) {
      this.poNotification.error('Erro interno do servidor');
      return throwError(() => err);
    } else {
      this.poNotification.error('Ocorreu um erro no servidor');
      return throwError(() => err);
    }
  }

  registerUser(user: any): Observable<RegisterUser> {
    const formData = new FormData();
    formData.append('name', user.name)
    formData.append('email', user.email)
    formData.append('age', user.age)
    formData.append('image', user.image)
    formData.append('password', user.password)
    formData.append('confirmPassword', user.confirmPassword)

    return this.httpClient.post<RegisterUser>(environments.BASE_URL + '/auth/register/user', formData)
      .pipe(
        catchError((err) => this.handleError(err))
      );
  }

  loginUser(user: any): Observable<any> {
    return this.httpClient.options<any>(environments.BASE_URL + '/auth/login')
      .pipe(
        retry(2),
        catchError((err) => {
          if (err.status === 0 && err.status != 404) {
            this.poNotification.error('O servidor não está respondendo. Por favor, verifique sua conexão de internet e tente novamente');
            return throwError(() => err);
          } else if (err.status === 400) {
            this.poNotification.error('Solicitação inválida');
            return throwError(() => err);
          } else if (err.status === 401) {
            this.poNotification.error('Não autorizado');
            return throwError(() => err);
          } else if (err.status === 403) {
            this.poNotification.error('Acesso proibido');
            return throwError(() => err);
          } else if (err.status === 404) {
            this.poNotification.error(err.error.message);
            return throwError(() => err);
          } else if (err.status === 500) {
            this.poNotification.error('Erro interno do servidor');
            return throwError(() => err);
          } else {
            this.poNotification.error('Ocorreu um erro no servidor');
            return throwError(() => err);
          }
        }
        )
      )
  }
}
