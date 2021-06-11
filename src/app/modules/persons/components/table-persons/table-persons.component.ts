import { Component, OnInit } from '@angular/core';
import { tap } from 'rxjs/operators';
import { PaginatorNgx } from '../../../../shared/models/paginate';
import { PersonsService } from '../../services/persons.service';

@Component({
  selector: 'app-table-persons',
  templateUrl: './table-persons.component.html',
  styleUrls: ['./table-persons.component.scss']
})
export class TablePersonsComponent implements OnInit {

  public data: any;

  public paginator = new PaginatorNgx

  constructor(
    private personsService: PersonsService
  ) { }

  ngOnInit(): void {
    this.paginate();      
  }

  paginate(){

    this.personsService
          .list(this.paginator)
          .pipe(tap((r: any) => this.paginator.updateProps(r)))
          .subscribe((r: any) => {
            this.data = r.data
          })

  }

}
