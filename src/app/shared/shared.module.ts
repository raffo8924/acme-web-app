import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {KapcomAutofocusDirective} from './directives/kapcom-autofocus.directive';
import {CommonService} from './services/common.service';
import {DataFilterPipe} from './util/data-filter-pipe';
import {HeaderComponent} from './components/header/header.component';
import {ContentLayoutComponent} from './components/layout/content-layout/content-layout.component';
import {FooterComponent} from './components/footer/footer.component';
import {SidebarComponent} from './components/sidebar/sidebar.component';
import {FeatherIconsComponent} from './components/feather-icons/feather-icons.component';
import {BreadcrumbComponent} from './components/breadcrumb/breadcrumb.component';
import {ToggleFullscreenDirective} from './directives/fullscreen.directive';
import {NavService} from './services/nav.service';
import {RouterModule} from '@angular/router';
import {SweetAlert2Module} from '@toverux/ngx-sweetalert2';
import {NgSelectModule} from '@ng-select/ng-select';
import {NgbDropdownModule, NgbModal, NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgxMyDatePickerModule} from 'ngx-mydatepicker';
import {NgHttpLoaderModule} from 'ng-http-loader';
import {HttpClientModule} from '@angular/common/http';
import {Urls} from '../components/common/util/constans';
import {Ng2Webstorage} from 'ngx-webstorage';
import {LoaderComponent} from './components/loader/loader.component';

@NgModule({
  imports: [

    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,

    NgbModule,
    NgbDropdownModule,
    NgxMyDatePickerModule.forRoot(),
    SweetAlert2Module.forRoot(),
    NgSelectModule,
    NgHttpLoaderModule.forRoot(),
    Ng2Webstorage

  ],
  declarations: [
    KapcomAutofocusDirective,
    DataFilterPipe,

    LoaderComponent,
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    ContentLayoutComponent,
    FeatherIconsComponent,
    BreadcrumbComponent,
    ToggleFullscreenDirective
  ],
  exports: [

    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,

    NgbModule,
    NgbDropdownModule,
    NgxMyDatePickerModule,
    SweetAlert2Module,
    NgSelectModule,
    NgHttpLoaderModule,
    Ng2Webstorage,

    LoaderComponent,
    FeatherIconsComponent
  ],
  providers: [NgbModal,
    Urls,
    CommonService,

    NavService
  ]
})
export class SharedModule {
}
