import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpErrorResponse,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { tap } from 'rxjs/operators';
  import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from 'ngx-spinner';

  @Injectable()

  export class CatchErrorsInterceptor implements HttpInterceptor {
    
    constructor(
      public route: Router,
      private toastService: ToastrService,
      private spinner: NgxSpinnerService
    ){}

    intercept(
        req: HttpRequest <any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

        /**
         * Si hay alguna peticion que quiera no manejar este catch de errores, se envía por cabecera
         * skip para omitr
         */
        if(req.headers.get('skip')){
            this.spinner.hide();
            return next.handle(req);
        }

          return next.handle(req).pipe(
            tap(
                (event: HttpEvent<any>) => {},
                (err: any) => {

                    if (err instanceof HttpErrorResponse) {
                        
                        switch (err.status) {
                            case 500:
                                this.toastService.error("Ha ocurrido un error en el servidor. Contactar con Soporte. Error: " + err.message)
                            break;
                            case 404:
                                this.toastService.warning("Recurso no encontrado")
                            break;
                            case 422:
                                const keys = Object.keys(err.error.errors)
    
                                this.toastService.warning(err.error.errors[keys[0]][0])
                            break;
                            case 429:
                                this.toastService.warning("Su red ha realizado demasiadas peticiones al servidor. Espere unos segundos")
                            break;
                            case 401:
                                this.toastService.warning("Usuario no se encuentra autenticado");
                            break;
                            case 403:
                                this.toastService.warning(err.error.message)
                            break;
                        }   

                        this.spinner.hide();

                    }
                }
            )
          )
    }

}
    