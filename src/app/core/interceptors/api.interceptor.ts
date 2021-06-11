import {
    HttpInterceptor,
    HttpRequest,
    HttpHandler,
    HttpEvent
  } from '@angular/common/http';
  import { Injectable } from '@angular/core';
  import { Observable } from 'rxjs';
  import { environment } from '../../../environments/environment';
  
  /**
   * Interceptor para asignar a las peticiones HTTP el base_url de las variables de entorno (prodution o development)
   */
  @Injectable()

  export class ApiInterceptor implements HttpInterceptor {
      
    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
      const url: string = environment.api;
      
      req = req.clone({ url: this.prepareUrl(req.url, url) });

      return next.handle(req);      

    }
    
    private prepareUrl(url: string, apiUrl: string): string {
         url = this.isAbsoluteUrl(url) ? url : apiUrl + '/' + url;

         return url.replace(/([^:]\/)\/+/g, '$1');
    }

    private isAbsoluteUrl(url: string): boolean {
        const absolutePattern = /^https?:\/\//i;

        return absolutePattern.test(url);
    }

}
    