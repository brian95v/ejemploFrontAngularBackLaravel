import { Injectable } from '@angular/core';

export interface User {
  id?: number,
  usDocumento: string,
  usApellido: string,
  usNombre: string,
  usTelefono: string,
  usLocalidad: string,
  usDomicilio: string,
  email: string,
  password: string,
  email_verified_at?: boolean,
  created_at?: string,
  updated_at?: string,
  rol?: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {
  myUser: User = {
    usDocumento: "",
    usApellido: "",
    usNombre: "",
    usTelefono: "",
    usLocalidad: "",
    usDomicilio: "",
    email: "",
    password: ""
  };

  constructor() {}

  setUser(user: User) {
    this.myUser = user;
  }

  getUser(): User {
    return this.myUser;
  }
}
