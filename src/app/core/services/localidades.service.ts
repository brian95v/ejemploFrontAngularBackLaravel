import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {
  private http = inject(HttpClient);

  constructor() { }

  getProvincias(): Observable<any>{
    return this.http.get<any[]>("https://apis.datos.gob.ar/georef/api/provincias?orden=nombre&aplanar=true&campos=basico&max=50&inicio=0&exacto=true&formato=json");
  }

  getLocalidades(idProvincia: number): Observable<any>{
    return this.http.get<any[]>(`https://apis.datos.gob.ar/georef/api/localidades?provincia=${idProvincia}&orden=nombre&aplanar=true&campos=id%2C%20nombre%2C%20departamento&max=500&inicio=0&exacto=true&formato=json`);
  }
}
