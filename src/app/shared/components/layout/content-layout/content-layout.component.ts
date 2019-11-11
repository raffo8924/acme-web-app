import {Component, OnInit, AfterViewInit, HostListener, ViewChild} from '@angular/core';
import {NavService} from '../../../services/nav.service';
import * as feather from 'feather-icons';
import {CustomizerService} from '../../../services/customizer.service';
import {ActivatedRoute, ActivationStart, NavigationStart, Params, Router, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-content-layout',
  templateUrl: './content-layout.component.html',
  styleUrls: ['./content-layout.component.scss']
})
export class ContentLayoutComponent implements OnInit, AfterViewInit {

  public routeHidden = false;

  @ViewChild(RouterOutlet, {static: false}) outlet: RouterOutlet;

  constructor(public navServices: NavService, public customizer: CustomizerService, private router: Router, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {

    this.router.events.subscribe((e) => {
      if (e instanceof NavigationStart) {
        if (e.url.includes('/(crud:')) {
          this.routeHidden = true;
        } else {
          this.routeHidden = false;
        }
      }
    });

    this.activatedRoute.queryParams.subscribe((params: Params) => {

      if (this.router.url.includes('/(crud:')) {
        this.routeHidden = true;
      } else {
        this.routeHidden = false;
      }
    });

  }

  ngAfterViewInit() {
    setTimeout(() => {
      feather.replace();
    });
  }

  public getRouterOutletState(outlet) {
    return outlet.isActivated ? outlet.activatedRoute : '';
  }

}
