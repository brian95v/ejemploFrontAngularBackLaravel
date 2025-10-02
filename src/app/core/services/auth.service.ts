import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { User } from './user.service';




@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private http = inject(HttpClient);
  private rol: string = "";

  constructor() { }

  login(email: string, password: string): Observable<any> {

    return this.http.post<any[]>(`${environment.apiURL}login`, {
      email: email,
      password: password
    })
  }

  register(user: User): Observable<any> {
      return this.http.post<any[]>(`${environment.apiURL}register`, user)
  }

  setRol(rol:string){
    this.rol = rol;
  }

  getRol(): string {
    return this.rol;
  }
}
