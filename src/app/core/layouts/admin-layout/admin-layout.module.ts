import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CommonModule } from "@angular/common";

import { AdminLayoutRoutes } from "./admin-layout.routing";
import { ComponentsModule } from "../../components/components.module";
import { AdminLayoutComponent } from "./admin-layout.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  declarations: [
    AdminLayoutComponent
  ],
  imports: [
    CommonModule,
    ComponentsModule,
    NgbModule,
    RouterModule.forChild(AdminLayoutRoutes),
  ],
})
export class AdminLayoutModule {}
