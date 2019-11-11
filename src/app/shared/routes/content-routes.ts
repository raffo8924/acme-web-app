import {Routes} from '@angular/router';

export const content: Routes = [
  {
    path: 'home',
    loadChildren: './components/home/home.module#HomeModule'
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },
  {
    path: 'persons',
    loadChildren: './components/person/person-list/person-list.module#PersonListModule',
    data: {
      title: 'Persons',
      breadcrumb: 'General'
    }
  }
];
