import { DOCUMENT } from "@angular/common";
import { Component, Inject, OnInit } from "@angular/core";

@Component({
  selector: "app-admin-layout",
  templateUrl: "./admin-layout.component.html",
  styleUrls: ["./admin-layout.component.scss"]
})
export class AdminLayoutComponent implements OnInit {

  public colors: any[] = [
    {
      name: 'red',
      badge: 'badge-danger'
    },
    {
      name: 'primary',
      badge: 'badge-primary'
    },
    {
      name: 'blue',
      badge: 'badge-info'
    },
    {
      name: 'green',
      badge: 'badge-success'
    },
  ]

  public sidebarColor: string = "blue";

  public bodyColor: string = 'white-content'

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {}
  
  ngOnInit() {
    this.changeDashboardColor(this.bodyColor)
  }

  changeSidebarColor(color){
    this.sidebarColor = color;

  }
  changeDashboardColor(color){
    this.bodyColor = color;
    this.document.body.className = color
  }
  
}
