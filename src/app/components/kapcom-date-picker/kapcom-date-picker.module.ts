import {NgModule} from '@angular/core';
import {KapcomDatePickerComponent} from './kapcom-date-picker.component';
import {SharedModule} from '../../shared/shared.module';

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [KapcomDatePickerComponent],
  exports: [KapcomDatePickerComponent],
  entryComponents: [KapcomDatePickerComponent]
})
export class KapcomDatePickerModule {
}
