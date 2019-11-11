import {NgModule} from '@angular/core';
import {SharedModule} from '../../shared/shared.module';
import {KapcomDatePickerModule} from '../kapcom-date-picker/kapcom-date-picker.module';
import {KapcomSortableColumnModule} from '../kapcom-sortable-column/kapcom-sortable-column.module';

@NgModule({
  imports: [
    SharedModule,
    KapcomDatePickerModule,
    KapcomSortableColumnModule
  ],
  declarations: [],
  exports: [
    SharedModule,
    KapcomDatePickerModule,
    KapcomSortableColumnModule
  ]
})
export class CommonModule {
}
