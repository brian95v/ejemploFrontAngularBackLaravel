import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LocalidadesService {
  private http = inject(HttpClient);

  constructor() { }

  getLocalidades(): Observable<any>{
    return this.http.get<any[]>("https://apis.datos.gob.ar/georef/api/localidades?provincia=Entre%20Rios&orden=nombre&aplanar=true&campos=id%2C%20nombre%2C%20departamento&max=500&inicio=0&exacto=true&formato=json");
  }
}
