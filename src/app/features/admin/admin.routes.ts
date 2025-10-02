import { Routes } from "@angular/router";
import { PanelAdminComponent } from "./panel-admin/panel-admin.component";
import { GestionMateriasComponent } from "./gestion-materias/gestion-materias.component";




export const admin_routes: Routes = [
    //archivo con rutas hijas de Student
    { path: 'panel', component: PanelAdminComponent, title: 'Panel Administrador' },
    { path: 'gestion-materias', component: GestionMateriasComponent, title: 'Gestión de Materias' }

]