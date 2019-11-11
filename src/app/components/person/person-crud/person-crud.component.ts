import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {CommonService} from '../../../shared/services/common.service';
import {MainModelCrudComponent} from '../../../shared/components/main-model-crud.component';
import {ToastrService} from 'ngx-toastr';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {PersonModel} from '../model/person-model';
import {PersonService} from '../service/person.service';

@Component({
  selector: 'app-person-crud',
  templateUrl: './person-crud.component.html'
})
export class PersonCrudComponent extends MainModelCrudComponent implements OnInit {

  public mainForm: FormGroup;
  public tabActive: string;

  public operation: string;
  public model: PersonModel;
  public flagMainButtons: boolean;

  public estadoGenericoList: any[];

  constructor(public toastr: ToastrService, private router: Router, private service: PersonService, private commonService: CommonService, private route: ActivatedRoute, private fb: FormBuilder) {
    super(toastr);
    this.route.params.subscribe(params => this.initForm(params.id));
  }

  ngOnInit() {
    this.flagMainButtons = true;
    window.scrollTo(0, 0);
    this.model = {} as PersonModel;
    this.loadDataSources();
  }

  public createForm() {
    this.mainForm = this.fb.group({ // <-- the parent FormGroup
      id: null,
      name: [null, [Validators.required, Validators.maxLength(100)]],
      lastname: [null, [Validators.maxLength(100)]],
      birth_date: [null, [Validators.required]],
      age: null,
      death_date: null,
      death_age: null
    });
  }

  public populateForm(model: PersonModel) {
    this.mainForm.patchValue({
      id: model.id,
      name: model.name,
      lastname: model.lastname,
      birth_date: model.birth_date,
      age: model.age,
      death_date: model.death_date,
      death_age: model.death_age
    });
  }

  private initForm(id?) {
    this.createForm();
    if (id) {
      this.operation = 'update';
      this.getRecord(id);
    } else {
      this.operation = 'new';
    }
  }

  public reloadRecord() {
    this.route.params.subscribe(params => this.getRecord(params.id));
  }

  public setSubModel($event) {
    this.model[$event.namePropertySubModels] = $event.dataPropertySubModels;
  }

  public setFlagEditSubModel($event) {
    this.flagMainButtons = $event;
  }

  public getRecord(id: number) {

    console.log('Edit Record:', id);

    this.service.getModel(id).subscribe((response) => {

      this.model = response.record;
      this.populateForm(this.model);

      console.log('Record:', this.model);

    }, (httpErrorResponse) => {
      console.log(httpErrorResponse.error);
    });
  }

  public saveRecord() {

    if (this.mainForm.valid) {
      this.model = Object.assign(this.model, this.mainForm.value);
      // console.log('Save Record:', this.model);
      console.log('Operation:', this.operation);
      if (this.operation === 'new') {
        this.service.createModel(this.model).subscribe((response) => {
          let url = '/persons/(crud:edit/{id})';
          url = url.replace('{id}', response.record.id);
          this.router.navigateByUrl(url);
          // this.model = response.record;
          // console.log('response', response);
          this.showSuccessFast();
        }, (httpErrorResponse) => {
          console.log(httpErrorResponse.error);
        });
      } else {
        this.service.updateModel(this.model.id, this.model).subscribe((response) => {
          this.getRecord(this.model.id);
          // this.model = response.record;
          // console.log('response', response);
          this.showSuccessFast();
        }, (httpErrorResponse) => {
          console.log(httpErrorResponse.error);
        });
      }
    } else {
      this.showError('Formulario invalid!', 'Data error');
      this.tabActive = 'mainTab';
    }
  }

  public removeRecord(id: number) {
    this.service.deleteModel(id).subscribe((response) => {
      this.showSuccess('Success!', 'Status');
      this.router.navigateByUrl('/persons');
    }, (error) => {
      console.log(error);
    });
  }

  public newRecord() {
    this.router.navigateByUrl('/persons/(crud:add)');
  }

  public loadDataSources(): void {

  }

  public dateChanged(date: Date) {
    this.model.birth_date = date;
    this.mainForm.patchValue({
      birth_date: this.model.birth_date
    });
  }
}
