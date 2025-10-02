import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarrerasService, Carrera, Materia } from '../../../core/services/carreras.service';


@Component({
  selector: 'app-gestion-materias',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gestion-materias.component.html',
  styleUrls: ['./gestion-materias.component.css']
})
export class GestionMateriasComponent implements OnInit{
  private router = inject(Router);
  private carreraService = inject(CarrerasService);

  carrera: Carrera | undefined;
  materias: Materia[] | undefined;




  ngOnInit(): void {
    this.carrera = this.carreraService.getMiCarrera();

    this.materias = this.carrera?.unidades_curriculares;
    console.log(this.carrera);
    console.log(this.materias);
  }


  volver(): void {
    this.router.navigate(['/private/admin/panel']);
  }
}
