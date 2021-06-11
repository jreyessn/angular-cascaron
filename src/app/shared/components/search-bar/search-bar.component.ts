import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { PaginatorNgx } from '../../models/paginate';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss']
})
export class SearchBarComponent implements OnInit {

  @Input () defaultValues: PaginatorNgx;

  @Output () changeValues = new EventEmitter<any>();

  formBar: FormGroup;

  perPages: any[] = [ 5,10,15,20 ]
  
  constructor(
    private formBuilder: FormBuilder
  ) { 

  }

  ngOnInit(): void {

    this.formBar = this.formBuilder.group({
      perPage: this.defaultValues?.perPage ?? 5,
      search: this.defaultValues?.search ?? ''
    })

    this.formBar.valueChanges.subscribe(newValues => {
      this.changeValues.emit(newValues) 
    })
    
  }

}
