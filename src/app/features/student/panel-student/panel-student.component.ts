import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Carrera, CarrerasService } from '../../../core/services/carreras.service';

@Component({
  selector: 'app-panel-student',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './panel-student.component.html',
  styleUrls: ['./panel-student.component.css']
})
export class PanelStudentComponent implements OnInit {
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
}
