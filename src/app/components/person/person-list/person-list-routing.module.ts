import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonListComponent} from './person-list.component';

const routes: Routes = [
  {
    path: '',
    component: PersonListComponent,
    data: {
      breadcrumb: 'Persons'
    }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonListRoutingModule {
}
