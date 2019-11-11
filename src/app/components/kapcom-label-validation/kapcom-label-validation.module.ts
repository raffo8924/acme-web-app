import {NgModule} from '@angular/core';
import {KapcomLabelValidationComponent} from './kapcom-label-validation.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  exports: [
    KapcomLabelValidationComponent
  ],
  declarations: [KapcomLabelValidationComponent]
})
export class KapcomLabelValidationModule { }
