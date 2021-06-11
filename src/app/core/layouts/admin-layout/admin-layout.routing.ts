import { Routes } from "@angular/router";

export const AdminLayoutRoutes: Routes = [
  { 
    path: "dashboard", 
    loadChildren: () => import('../../../modules/dashboard/dashboard.module').then(m => m.DashboardModule),
  },
  { 
    path: "persons", 
    loadChildren: () => import('../../../modules/persons/persons.module').then(m => m.PersonsModule),
  },
];
