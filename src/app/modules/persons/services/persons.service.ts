import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PaginatorNgx } from '../../../shared/models/paginate';

@Injectable({
  providedIn: 'root'
})
export class PersonsService {

  private prefix: string = 'persons';

  constructor(
    private http: HttpClient
  ) { }

  list(paginator: PaginatorNgx){
    
    return this.http.get(`${this.prefix}?${paginator.getHttpParams()}`);

  }

}
