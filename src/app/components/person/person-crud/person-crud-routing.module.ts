import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PersonCrudComponent} from './person-crud.component';

const routes: Routes = [
  {
    path: 'add',
    component: PersonCrudComponent,
    outlet: 'crud'
  },
  {
    path: 'edit/:id',
    component: PersonCrudComponent,
    outlet: 'crud'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PersonCrudRoutingModule {
}
