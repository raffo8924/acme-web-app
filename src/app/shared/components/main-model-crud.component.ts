
import {AbstracCrudComponent} from './abstrac-crud.component';
import {ToastrService} from 'ngx-toastr';
import {Spinkit} from 'ng-http-loader';

export class MainModelCrudComponent extends AbstracCrudComponent {

  public spinkit = Spinkit;
  public flagShowFilters = false;

  constructor(public toastr: ToastrService) {
    super();
  }

  public showSuccess(message, title) {
    if (title == null) {
      title = 'status';
    }
    this.toastr.success(message, title, {
      closeButton: true,
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'decreasing'
    });
  }

  public showError(message, title) {
    if (title == null) {
      title = 'status';
    }
    this.toastr.error(message, title);
  }

  public showSuccessFast() {
    console.log('test');
    this.toastr.success('Operación completada!', 'Status', {
      closeButton: true,
      timeOut: 5000,
      progressBar: true,
      progressAnimation: 'decreasing'
    });
  }

  public showErrorFast() {
    this.toastr.error('Error operación incompleta', 'Status');
  }

  public toggleFilters(): void {
    if (this.flagShowFilters) {
      this.flagShowFilters = false;
    } else {
      this.flagShowFilters = true;
    }
  }
}
