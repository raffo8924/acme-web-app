import {NgModule} from '@angular/core';
import {SharedModule} from '../../../shared/shared.module';
import {PersonCrudComponent} from './person-crud.component';
import {CommonModule} from '../../common/common.module';
import {PersonCrudRoutingModule} from './person-crud-routing.module';
import {PersonService} from '../service/person.service';
import {KapcomLabelValidationModule} from "../../kapcom-label-validation/kapcom-label-validation.module";

@NgModule({
  declarations: [PersonCrudComponent],
  imports: [
    SharedModule,
    CommonModule,
    PersonCrudRoutingModule,
    KapcomLabelValidationModule
  ],
  providers: [PersonService]
})
export class PersonCrudModule {
}
