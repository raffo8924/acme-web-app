import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';
import {ToastrService} from 'ngx-toastr';
import {MainModelCrudComponent} from '../../shared/components/main-model-crud.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent extends MainModelCrudComponent implements OnInit {

  @LocalStorage('sessionUser')
  public sessionUser: any;

  constructor(public toastr: ToastrService, private rotuer: Router, private activatedRoute: ActivatedRoute, private localStorageService: LocalStorageService) {
    super(toastr);
  }

  ngOnInit() {

  }

}
