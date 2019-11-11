import {AbstractControl} from '@angular/forms';

export function integerNumber(control: AbstractControl): { [key: string]: boolean } | null {
  try {
    const val = +control.value;
    if (Number.isInteger(val)) {
      return null;
    } else {
      return {'integerNumber': true};
    }
  } catch (e) {
    return {'integerNumber': true};
  }
}

export function floatNumber(control: AbstractControl): { [key: string]: boolean } | null {
  if (!isNaN(control.value)) {
    return null;
  }
  return {'floatNumber': true};
}

export function generalString(control: AbstractControl): { [key: string]: boolean } | null {
  const pattern = new RegExp('^[A-Za-z0-9 _.-]*[A-Za-z0-9_.-][A-Za-z0-9 _.-]*$');
  if (pattern.test(control.value)) {
    return null;
  }
  return {'generalString': true};
}

export function codesString(control: AbstractControl): { [key: string]: boolean } | null {
  const pattern = new RegExp('^[A-Za-z0-9_.-]*[A-Za-z0-9_.-][A-Za-z0-9_.-]*$');
  if (pattern.test(control.value)) {
    return null;
  }
  return {'codesString': true};
}

export function codes2String(control: AbstractControl): { [key: string]: boolean } | null {
  const pattern = new RegExp('^[A-Za-zÀ-ÿ\u00f1\u00d10-9-_.\\\\(\\\\) ]*$');
  if (pattern.test(control.value)) {
    return null;
  }
  return {'codes2String': true};
}



export function namesString(control: AbstractControl): { [key: string]: boolean } | null {
  const pattern = new RegExp('^[a-zA-ZÀ-ÿ\u00f1\u00d1 ]+(\\\\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$');
  if (pattern.test(control.value)) {
    return null;
  }
  return {'namesString': true};
}
