import { FormControl } from '@angular/forms';

export type ContatoFormType = {
  nome: FormControl<string>;
  email: FormControl<string>;
  assunto: FormControl<string>;
  mensagem: FormControl<string>;
};
