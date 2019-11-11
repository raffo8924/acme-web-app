import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup} from '@angular/forms';
import {KapcomColumnSorted} from '../../kapcom-sortable-column/service/kapcom-sortable-column.service';
import {CommonService} from '../../../shared/services/common.service';
import {MainModelCrudComponent} from '../../../shared/components/main-model-crud.component';
import {ToastrService} from 'ngx-toastr';
import {PersonModelCriteria} from '../model/person-model-criteria';
import {PersonModel} from '../model/person-model';
import {PersonService} from '../service/person.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {KpiPersonComponent} from "../kpi-person/kpi-person.component";

@Component({
  selector: 'app-person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent extends MainModelCrudComponent implements OnInit {

  public mainFormCriteria: FormGroup;
  public modelCriteria: PersonModelCriteria;
  public models: PersonModel[];
  public pageSizes: number[] = [10, 15, 20, 50, 100];
  public pageSize = 10;
  public currentPage = 0;
  public total: number;
  public kapcomColumnSorted: KapcomColumnSorted;

  constructor(public toastr: ToastrService, private rotuer: Router, private service: PersonService, private commonService: CommonService, private fb: FormBuilder, public modalService: NgbModal) {
    super(toastr);
  }

  ngOnInit() {
    window.scrollTo(0, 0);
    this.createForm();
    this.modelCriteria = {} as PersonModelCriteria;
    this.filterData();
    this.loadDataSources();
  }

  public createForm() {
    this.mainFormCriteria = this.fb.group({
      id: null
      , names: null
    });
  }

  public populateForm(model: PersonModelCriteria) {
    this.mainFormCriteria.patchValue({
      id: model.id
      , names: model.names
    });
  }

  public filterData() {

    this.modelCriteria = Object.assign(this.modelCriteria, this.mainFormCriteria.value);

    if (this.kapcomColumnSorted) {
      this.modelCriteria.order_column = this.kapcomColumnSorted.sortColumn;
      this.modelCriteria.order_direction = this.kapcomColumnSorted.sortDirection;
    }

    if (this.pageSize) {
      this.modelCriteria.limit = this.pageSize;
    }

    if (this.currentPage) {
      this.modelCriteria.start = ((this.currentPage - 1) * this.modelCriteria.limit);
    }

    const mapParams = this.buildMap(this.modelCriteria);
    const queryString: string = this.generateQueryString(mapParams);

    this.service.getModels(queryString).subscribe((response) => {
      this.total = response.total;
      this.models = response.records;
    }, (error) => {
      console.log(error);
    });

  }

  public onSorted($event) {
    this.kapcomColumnSorted = $event;
    this.filterData();
  }

  public onPageChanged($event) {
    this.currentPage = $event;
    this.filterData();
  }

  public onClearFilters() {
    this.modelCriteria = {} as PersonModelCriteria;
    this.populateForm(this.modelCriteria);
  }

  public removeRecord(id: number) {
    this.service.deleteModel(id).subscribe((response) => {
      this.showSuccess('Operación completada!', 'Status');
      this.filterData();
    }, (error) => {
      console.log(error);
    });
  }

  public loadDataSources(): void {
  }

  public openModalKpi(): void {
    const modalRef = this.modalService.open(KpiPersonComponent, {size: 'lg', backdrop: 'static'});
  }
}

