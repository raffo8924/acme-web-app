import {Component, Input} from '@angular/core';
import {AbstractControlDirective, AbstractControl} from '@angular/forms';


@Component({
  selector: 'kapcom-label-validation',
  templateUrl: './kapcom-label-validation.component.html'
})
export class KapcomLabelValidationComponent {

  constructor() {
  }

  private static readonly errorMessages = {
    'required': () => 'Este campo es requerido',
    'minlength': (params) => 'La cantidad mínima de caracteres es ' + params.requiredLength,
    'maxlength': (params) => 'La cantidad máxima permitida de caracteres es ' + params.requiredLength,
    'pattern': (params) => 'El patrón requerido es: ' + params.requiredPattern,
    'invalidDateFormat': () => 'El formato de fecha no es válido',
    'email': () => 'Correo invalido',
    'max': (params) => 'El valor máximo permitido es ' + params.max,
    'integerNumber': () => 'El número ingresado no es entero.',
    'floatNumber': () => 'El número ingresado no es valido.',
    'generalString': () => 'El valor ingresado no es valido.',
    'codesString': () => 'El valor ingresado no es valido.',
    'codes2String': () => 'El valor ingresado no es valido.',
    'namesString': () => 'El valor ingresado no es valido.'
  };

  @Input()
  private control: AbstractControlDirective | AbstractControl;

  shouldShowErrors(): boolean {
    return this.control &&
      this.control.errors &&
      (this.control.dirty || this.control.touched);
  }

  listOfErrors(): string[] {
    return Object.keys(this.control.errors)
      .map(field => this.getMessage(field, this.control.errors[field]));
  }

  private getMessage(type: string, params: any) {
    // console.log('type', type);
    // console.log('params', params);
    return KapcomLabelValidationComponent.errorMessages[type](params);
  }

}
