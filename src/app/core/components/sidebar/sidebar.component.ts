import { Component, OnInit } from "@angular/core";
import { SidebarService } from "../../services/sidebar.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.css"]
})
export class SidebarComponent implements OnInit {
  
  constructor(
    public sidebarService: SidebarService
  ) {}

  ngOnInit() {

  }

  isMobileMenu() {
    if (window.innerWidth > 991) {
      return false;
    }
    return true;
  }
}
