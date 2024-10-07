import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
  ],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) {
    // Inicialización del formulario reactivo con validadores
    this.contactForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
      message: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  // Método para enviar el formulario
  onSubmit() {
    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      alert('Mensaje enviado con éxito');
    } else {
      alert('Por favor, rellene el formulario correctamente.');
    }
  }

}
