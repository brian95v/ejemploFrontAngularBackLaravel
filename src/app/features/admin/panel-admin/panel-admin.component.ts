import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CarrerasService, Carrera, Materia } from '../../../core/services/carreras.service';

@Component({
  selector: 'app-panel-admin',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-admin.component.html',
  styleUrls: ['./panel-admin.component.css']
})
export class PanelAdminComponent implements OnInit {
  private router = inject(Router);
  private carreraService = inject(CarrerasService);

  rolUser: string = "";
  nombreUser: string = "";
  carreras: Carrera[] | undefined;


  ngOnInit() {
    this.nombreUser = sessionStorage.getItem('userName') || '';
    this.rolUser = sessionStorage.getItem('rol') || '';
    this.getCarreras();
  }

  getCarreras(): void {
    this.carreraService.getAllCarreras().subscribe({
      next: (data) => {
        this.carreras = data;
        //console.log(this.carreras);
      },
      error: (e) => {
        console.log(e);
      }
    })
  }



  verMaterias(carrera: Carrera): void {
    this.carreraService.setMiCarrera(carrera);
    console.log(carrera);
    this.router.navigate(['/private/admin/gestion-materias']);

  }
}
