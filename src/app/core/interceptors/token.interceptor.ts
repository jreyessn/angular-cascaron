import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent,
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { Router } from '@angular/router';


/**
 * Interceptor para asignar a los headers de las peticiones el token en memoria
 */
  @Injectable()

  export class TokenInterceptor implements HttpInterceptor {
    
    constructor(
      public route: Router,
    ){}

    intercept(
        req: HttpRequest <any>, 
        next: HttpHandler
    ): Observable<HttpEvent<any>> {

          const currentUser = JSON.parse(localStorage.getItem('user'));
          const token = localStorage.getItem('token');

          if (currentUser && token) {
            req = req.clone({
              headers: req.headers.set('Authorization', `Bearer ${token}`)
            });
          }

          return next.handle(req)
    }


}
    