import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { LocalidadesService } from '../../../core/services/localidades.service';
import { AbstractControl, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { AuthService } from '../../../core/services/auth.service'; 
import { User } from '../../../core/services/user.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, RouterLink, ReactiveFormsModule],
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  private localidadesService = inject(LocalidadesService);
  private authService = inject(AuthService);



  localidades: any[] = [];
  registerForm: FormGroup;
  envData: boolean = false;

  constructor(private fb: FormBuilder, private router: Router) {
    this.registerForm = this.fb.group({
      apellido: ['', [Validators.required, Validators.minLength(3)]],
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      documento: ['', [Validators.required, Validators.minLength(8)]],
      telefono: ['', [Validators.required, Validators.minLength(6)]],
      domicilio: ['', [Validators.required, Validators.minLength(3)]],
      localidad: ['', [Validators.required, Validators.minLength(3)]],
      rol: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]]
    }, { validators: this.passwordMatchValidator });
  } /* Qué hace:
    Añade un validador a nivel de formulario (no a campos individuales)
    Se ejecuta automáticamente cuando cambia cualquier campo del formulario
    Permite validar la relación entre múltiples campos */


  ngOnInit() {
    this.localidadesService.getLocalidades().subscribe(data => {
      this.localidades = data.localidades;
      console.log(this.localidades);
    });
  }

  register(): void {
    let dataRegistro: User  = {
      usApellido: this.registerForm.get('apellido')?.value,
      usNombre: this.registerForm.get('nombre')?.value,
      usDocumento: this.registerForm.get('documento')?.value.toString(),
      usTelefono: this.registerForm.get('telefono')?.value,
      usLocalidad: this.registerForm.get('localidad')?.value,
      usDomicilio: this.registerForm.get('domicilio')?.value,
      email: this.registerForm.get('email')?.value,
      password: this.registerForm.get('password')?.value,
      rol: this.registerForm.get('rol')?.value
    }
    
    
    if (this.registerForm.valid) {
      this.envData = true;

      this.authService.register(dataRegistro).subscribe({
        next: (data) => {
          console.log(data);
          this.registroExitoso();
          this.envData = false;
        },
        error: (e) => {
          console.log(e);
          this.envData = false;
        }
      });
    }

  }

  registroExitoso(): void {
    //Lógica de registro exitoso
  }


  /* Qué hace:
    Recibe el AbstractControl (que en este caso es el FormGroup completo)
    Obtiene los dos controles hijos (newPassword y confirmPassword)
    Compara sus valores:
        Si son iguales → retorna null (indica que no hay error)
        Si son diferentes → retorna un objeto de error { passwordMismatch: true } */
  // Validador personalizado para verificar que las contraseñas coincidan
  private passwordMatchValidator: ValidatorFn = (control: AbstractControl): ValidationErrors | null => {
    const password = control.get('password');
    const confirmPassword = control.get('confirmPassword');

    if (!password || !confirmPassword) {
      return null;
    }

    return password.value === confirmPassword.value ? null : { passwordMismatch: true };
  };
}
