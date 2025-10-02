import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  private authService = inject(AuthService);

  loginForm: FormGroup;
  verFeedback: boolean = false;
  dataFeedback: string = '';
  envData: boolean = false;




  constructor(private fb: FormBuilder, private router: Router) {
    this.loginForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }

  login(): void {
    let email: string = this.loginForm.get('email')?.value;
    let password: string = this.loginForm.get('password')?.value;

    if (this.loginForm.valid) {
      this.envData = true;

      this.authService.login(email, password).subscribe({
        next: (data) => {
          console.log(data);
          this.inicioExitoso(data);
          this.envData = false;
        },
        error: (e) => {
          console.log(e);
          this.dataFeedback = e.error.message;
          this.verFeedback = true;
          this.envData = false;
        }
      });
    }
  }

  inicioExitoso(data: any): void {
    sessionStorage.setItem('authToken', data.token);
    sessionStorage.setItem('userName', `${data.user.usApellido}, ${data.user.usNombre}`);
    sessionStorage.setItem('rol', data.rol);

    if (data.rol === "admin") {
      this.router.navigate(['/private/admin/panel']);
    } else if (data.rol === "estudiante") {
      this.router.navigate(['/private/student/panel']);
    }
  }



}
