import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import {
  FormGroup,
  FormsModule,
  NonNullableFormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ContatoFormType } from './contatoForm';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './app.component.html',
  styles: [],
})
export class AppComponent {
  private readonly formBuilder: NonNullableFormBuilder = inject(
    NonNullableFormBuilder
  );

  public contatoForm!: FormGroup<ContatoFormType>;

  constructor() {
    this.contatoForm = this.formBuilder.group({
      nome: this.formBuilder.control(
        { value: '', disabled: false },
        {
          validators: [Validators.required],
        }
      ),
      email: this.formBuilder.control(
        { value: '', disabled: false },
        {
          validators: [Validators.required, Validators.email],
        }
      ),
      assunto: this.formBuilder.control(
        {
          value: '',
          disabled: false,
        },
        { validators: [Validators.required] }
      ),
      mensagem: this.formBuilder.control(
        { value: '', disabled: false },
        { validators: [Validators.maxLength(300)] }
      ),
    });
  }

  public submitForm(): void {
    if (this.contatoForm.valid) {
      const contato = this.contatoForm.getRawValue();

      console.log({ contato });
    }
  }
}
