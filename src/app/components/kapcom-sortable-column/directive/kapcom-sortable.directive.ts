import {Directive, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Subscription} from 'rxjs';
import {KapcomSortableColumnService} from '../service/kapcom-sortable-column.service';

@Directive({
  selector: '[kapcom-sortable]'
})
export class KapcomSortableDirective implements OnInit, OnDestroy {

  constructor(private kapcomSortableColumnService: KapcomSortableColumnService) {}

  @Output()
  sorted = new EventEmitter();

  private columnSortedSubscription: Subscription;

  ngOnInit() {
    this.columnSortedSubscription = this.kapcomSortableColumnService.columnSorted$.subscribe(event => {
      this.sorted.emit(event);
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }

}
