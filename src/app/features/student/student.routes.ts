import { Routes } from "@angular/router";
import { PanelStudentComponent } from "./panel-student/panel-student.component";


export const student_routes: Routes = [
    //archivo con rutas hijas de Student
    { path: 'panel', component: PanelStudentComponent, title: 'Panel Estudiante' }


]