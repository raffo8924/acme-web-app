import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable()
export class KapcomSortableColumnService {

  constructor() {
  }

  private columnSortedSource = new Subject<KapcomColumnSorted>();

  columnSorted$ = this.columnSortedSource.asObservable();

  columnSorted(event: KapcomColumnSorted) {
    this.columnSortedSource.next(event);
  }

}

export interface KapcomColumnSorted {
  sortColumn: string;
  sortDirection: string;
}
