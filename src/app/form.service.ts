import { Injectable } from '@angular/core';
import { FormComponent } from './form-parent/form/form.component';

@Injectable()
export class FormService {
  public data!: Array<{ name: string; lastName: string; birthDate: string }>;
  constructor() {}

  addData(name: string, lastName: string, birthDate: string) {
    if(this.data) {
      this.data.push({ name, lastName, birthDate });
    } else {
      this.data = new Array ({ name, lastName, birthDate });
    }
  }
}
