import { Routes } from '@angular/router';

export const AuthLayoutRoutes: Routes = [
    { 
        path: 'login',          
        loadChildren: () => import('../../../modules/login/login.module').then(m => m.LoginModule), 
    },
];
