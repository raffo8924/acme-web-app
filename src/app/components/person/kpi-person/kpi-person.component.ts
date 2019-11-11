import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {ToastrService} from 'ngx-toastr';
import {NgbActiveModal} from '@ng-bootstrap/ng-bootstrap';
import {CommonService} from '../../../shared/services/common.service';
import {MainModelCrudComponent} from '../../../shared/components/main-model-crud.component';
import {Urls} from '../../common/util/constans';
import {KpiPersonModel} from '../model/kpi-person-model';
import {PersonModel} from '../model/person-model';

@Component({
  selector: 'app-kpi-person',
  templateUrl: './kpi-person.component.html'
})
export class KpiPersonComponent extends MainModelCrudComponent implements OnInit {

  public mainForm: FormGroup;
  public model: KpiPersonModel;
  public persons: PersonModel[] = [];

  constructor(public toastr: ToastrService, public activeModal: NgbActiveModal, private commonService: CommonService) {
    super(toastr);
  }

  ngOnInit() {
    this.model = {} as KpiPersonModel;
    this.loadDataSources();
  }

  public loadDataSources(): void {

    this.commonService.commonGetRestWithParams(Urls.PERSON_SERVICE_API, 'foo=1', true).subscribe((response) => {
      this.persons = response.records;
    }, (error) => {
      console.log(error);
    });

    this.commonService.commonGetRestWithParams(Urls.PERSON_SERVICE_API + 'kpi', 'foo=1', true).subscribe((response) => {
      this.model = response.record;
    }, (error) => {
      console.log(error);
    });

  }

}
