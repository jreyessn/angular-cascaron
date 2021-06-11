import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { routes } from './core.routing';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './interceptors/api.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { CatchErrorsInterceptor } from './interceptors/catch.interceptor';
import { NgxSpinnerModule } from "ngx-spinner";

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HttpClientModule,
    NgxSpinnerModule,
    RouterModule.forRoot(routes, {
      useHash: false
    })
  ],
  exports: [
    RouterModule
  ],
  providers: [
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: ApiInterceptor, 
      multi: true 
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: TokenInterceptor, 
      multi: true 
    },
    { 
      provide: HTTP_INTERCEPTORS, 
      useClass: CatchErrorsInterceptor, 
      multi: true 
    },
  ]
})
export class CoreModule { }
