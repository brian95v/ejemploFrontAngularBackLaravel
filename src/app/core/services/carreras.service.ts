import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';


export interface Carrera {
  id?: number,
  carNombre: string,
  created_at: string,
  updated_at: string,
  unidades_curriculares: Materia[]
}

export interface Materia {
  id?: number,
  ucNombre: string,
  carrera_id: number,
  created_at: string,
  updated_at: string,
}

@Injectable({
  providedIn: 'root'
})
export class CarrerasService {
  private http = inject(HttpClient);

  miCarrera: Carrera = {
    carNombre: "",
    created_at: "",
    updated_at: "",
    unidades_curriculares: []};


  constructor() { }

  getAllCarreras(): Observable<Carrera[]> {
    return this.http.get<Carrera[]>(`${environment.apiURL}carrerasWithUC`)
  }

  setMiCarrera(carrera: Carrera): void {
    this.miCarrera = carrera;
  }

  getMiCarrera(): Carrera {
    return this.miCarrera;
  }
}
