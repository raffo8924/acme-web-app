import {HostListener, Injectable} from '@angular/core';
import {BehaviorSubject} from 'rxjs';
import {LocalStorage, LocalStorageService} from 'ngx-webstorage';
import {CommonService} from './common.service';

// Menu
export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}

@Injectable({
  providedIn: 'root'
})

export class NavService {

  public screenWidth: any;
  public collapseSidebar: boolean;

  public MENUITEMS: Menu[];
  public items: any;

  constructor(private commonService: CommonService, private localStorage: LocalStorageService) {
    this.MENUITEMS = new Array();
    this.onResize();
    if (this.screenWidth < 991) {
      this.collapseSidebar = true;
    }
    this.cargarMenu();
  }

  public cargarMenu() {
    //
    this.MENUITEMS = [
      {
        path: '/persons', title: 'Persons', icon: 'user', type: 'link'
      }
    ];
    this.items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
  }

  // Windows width
  @HostListener('window:resize', ['$event'])
  onResize(event?) {
    this.screenWidth = window.innerWidth;
  }

}
