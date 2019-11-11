import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {KapcomDatePickerModule} from '../kapcom-date-picker/kapcom-date-picker.module';

@NgModule({
  imports: [
    SharedModule,
    KapcomDatePickerModule
  ],
  declarations: [],
  exports: [
    SharedModule,
    KapcomDatePickerModule
  ]
})
export class CommonModule {
}
