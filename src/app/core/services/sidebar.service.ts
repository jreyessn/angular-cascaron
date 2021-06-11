import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { RouteInfo } from '../interfaces/route.interface';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  public menu: RouteInfo[] = [
    {
      path: 'dashboard',
      title: "Dashboard",
      icon: "icon-chart-pie-36",
      class: ""
    },
    {
      path: 'persons',
      title: "Personas",
      icon: "icon-single-02",
      class: ""
    },
  ]

  constructor() { 

  }


}
