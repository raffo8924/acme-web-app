import {Component, HostListener, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from 'rxjs';
import {KapcomSortableColumnService} from './service/kapcom-sortable-column.service';

@Component({
  selector: '[kapcom-sortable-column]',
  templateUrl: './kapcom-sortable-column.component.html'
})
export class KapcomSortableColumnComponent implements OnInit, OnDestroy {

  constructor(private kapcomSortableColumnService: KapcomSortableColumnService) {
    this.sortDirection = '';
  }

  @Input('kapcom-sortable-column')
  columnName: string;

  @Input('sort-direction')
  sortDirection: string;

  private columnSortedSubscription: Subscription;

  @HostListener('click')
  sort() {
    this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    this.kapcomSortableColumnService.columnSorted({ sortColumn: this.columnName, sortDirection: this.sortDirection });
  }

  ngOnInit() {
    // subscribe to sort changes so we can react when other columns are sorted
    this.columnSortedSubscription = this.kapcomSortableColumnService.columnSorted$.subscribe(event => {
      // reset this column's sort direction to hide the sort icons
      if (this.columnName !== event.sortColumn) {
        this.sortDirection = '';
      }
    });
  }

  ngOnDestroy() {
    this.columnSortedSubscription.unsubscribe();
  }
}
