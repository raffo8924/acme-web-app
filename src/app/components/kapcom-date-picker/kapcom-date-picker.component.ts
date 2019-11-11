import {Component, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';
import {IMyDate, INgxMyDpOptions, NgxMyDatePickerDirective} from 'ngx-mydatepicker';
import {IMyDateModel} from 'mydatepicker';

@Component({
    selector: 'kapcom-date-picker',
    templateUrl: './kapcom-date-picker.component.html'
})
export class KapcomDatePickerComponent implements OnInit {

    public model: any;
    public format: string;
    public readonly = false;
    public placeholder: string;
    @Output() dateChanged = new EventEmitter<any>();

    @Input()
    set setDateValue(date: any) {

        if (date) {

            const val = new Date(date);
            this.model = {date: this.dateToNgxDate(val)};

        } else {
            this.model = null;
        }
    }

    @Input()
    set setDateFormat(format: string) {
        if (format) {
            this.format = format;
            this.myOptions.dateFormat = format;
            if(this.fechaDp){
              this.fechaDp.parseOptions(this.myOptions);
            }

        }
    }

    @Input()
    set setReadOnly(flag: boolean) {
        this.readonly = flag;
    }

    @Input()
    set setPlaceholder(text: string) {
        this.placeholder = text;
    }

    @Input()
    set setDateDisableUntil(date: Date) {
        this.setDisableUntil(date);
    }

    @Input()
    set setDateDisableSince(date: Date) {
        this.setDisableSince(date);
    }

    constructor() {
    }

    myOptions: INgxMyDpOptions = {
        dateFormat: 'dd/mm/yyyy'
    };

    @ViewChild('fechaDp', {static: false}) fechaDp: NgxMyDatePickerDirective;

    ngOnInit() {
        if (this.model == null) {
            this.model = {};
        }
    }

    onDateClear(): void {
        this.fechaDp.clearDate();
        this.dateChanged.emit(null);
    }

    public onDateChanged(event: IMyDateModel): Date {
        if (event.jsdate) {
            this.dateChanged.emit(event.jsdate);
        }
        return null;
    }

    public setDisableUntil(date: Date) {
        if (date) {
            const val = new Date(date);
            this.myOptions.disableUntil = this.dateToNgxDate(val);
            this.fechaDp.parseOptions(this.myOptions);
        }
    }

    public setDisableSince(date: Date) {
        if (date) {
            const val = new Date(date);
            this.myOptions.disableUntil = this.dateToNgxDate(val);
            this.fechaDp.parseOptions(this.myOptions);
        }
    }

    public dateToNgxDate(date: Date): IMyDate {
        if (date) {
            return {

                year: date.getFullYear(),
                month: date.getMonth() + 1,
                day: date.getDate()

            };
        } else {
            return null;
        }
    }

}
