import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-persons-list',
  templateUrl: './persons-list.component.html',
  styleUrls: ['./persons-list.component.scss']
})
export class PersonsListComponent implements OnInit {

  public dataRoute: Observable<any>;

  constructor(
    private activatedRoute: ActivatedRoute,
  ) { 
    this.dataRoute = this.activatedRoute.data;
  }

  ngOnInit(): void {
    
  

  }

}
