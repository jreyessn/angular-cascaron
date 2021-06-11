import { Routes } from "@angular/router";
import { AuthGuard } from "./auth/auth.guard";
import { AdminLayoutComponent } from "./layouts/admin-layout/admin-layout.component";
import { AuthLayoutComponent } from "./layouts/auth-layout/auth-layout.component";

export const routes: Routes = [
    {
      path: "",
      redirectTo: "dashboard",
      pathMatch: "full"
    },
    {
      path: "",
      component: AdminLayoutComponent,
      children: [
        {
          path: "",
          loadChildren: () => 
             import("./layouts/admin-layout/admin-layout.module").then(m => m.AdminLayoutModule)
            
        }
      ],
      canActivate: [ AuthGuard ]
    }, 
    {
      path: "",
      component: AuthLayoutComponent,
      children: [
        {
          path: "",
          loadChildren: () => 
             import("./layouts/auth-layout/auth-layout.module").then(m => m.AuthLayoutModule)
            
        }
      ]
    }, 
];