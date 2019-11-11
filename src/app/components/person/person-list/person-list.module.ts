import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {CommonModule} from '../../common/common.module';
import {PersonService} from '../service/person.service';
import {PersonListComponent} from './person-list.component';
import {PersonListRoutingModule} from './person-list-routing.module';
import {PersonCrudModule} from '../person-crud/person-crud.module';
import {KpiPersonComponent} from '../kpi-person/kpi-person.component';

@NgModule({
  declarations: [PersonListComponent, KpiPersonComponent],
  imports: [
    SharedModule,
    CommonModule,
    PersonCrudModule,
    PersonListRoutingModule
  ],
  providers: [PersonService],
  entryComponents: [KpiPersonComponent]
})
export class PersonListModule {
}
