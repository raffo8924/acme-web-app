import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ContentLayoutComponent} from './shared/components/layout/content-layout/content-layout.component';
import {content} from './shared/routes/content-routes';

const routes: Routes = [
  {
    path: '',
    component: ContentLayoutComponent,
    children: content
  },
  {
    path: '**',
    redirectTo: 'home'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
