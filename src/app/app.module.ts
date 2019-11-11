import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule, NoopAnimationsModule} from '@angular/platform-browser/animations';
import {BrowserModule} from '@angular/platform-browser';
import {HomeModule} from './components/home/home.module';
import {ToastrModule} from 'ngx-toastr';
import {SharedModule} from './shared/shared.module';
import {PersonListModule} from './components/person/person-list/person-list.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [

    AppRoutingModule,

    HomeModule,
    PersonListModule,

    SharedModule,

    BrowserModule,
    BrowserAnimationsModule,
    NoopAnimationsModule,

    ToastrModule.forRoot()
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
