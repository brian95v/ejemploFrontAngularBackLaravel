import { Routes } from '@angular/router';
import { PublicLayoutComponent } from './core/layouts/public-layout/public-layout.component';
import { PrivateLayoutComponent } from './core/layouts/private-layout/private-layout.component';
import { LoginComponent } from './features/auth/login/login.component';
import { RegisterComponent } from './features/auth/register/register.component';

export const routes: Routes = [
    {
        path: '', component: PublicLayoutComponent,
        children: [
            { path: '', component: LoginComponent, title: 'EduAttendance' },
            { path: 'login', component: LoginComponent, title: 'Inicio de session' },
            { path: 'register', component: RegisterComponent, title: 'Registro de usuario' }
        ]
    },

    {
        path: 'private', component: PrivateLayoutComponent,
        children: [
            //importa el archivo con las rutas hijas
            {
                path: 'student',
                loadChildren: () => import('./features/student/student.routes').then(m => m.student_routes)
            },
            {
                path: 'admin',
                loadChildren: () => import('./features/admin/admin.routes').then(m => m.admin_routes)
            },

        ]
    },

    { path: '**', redirectTo: '' }
];
