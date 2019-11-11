import {NgModule} from '@angular/core';
import {KapcomSortableColumnComponent} from './kapcom-sortable-column.component';
import {KapcomPagerService} from './service/kapcom-pager.service';
import {KapcomSortableColumnService} from './service/kapcom-sortable-column.service';
import {KapcomSortableDirective} from './directive/kapcom-sortable.directive';
import {SharedModule} from '../../shared/shared.module';
@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [KapcomSortableColumnComponent, KapcomSortableDirective],
  exports: [KapcomSortableColumnComponent, KapcomSortableDirective],
  providers: [
    KapcomPagerService,
    KapcomSortableColumnService
  ]
})
export class KapcomSortableColumnModule {
}
