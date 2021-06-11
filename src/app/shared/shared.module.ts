import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [SearchBarComponent],
  imports: [
    CommonModule,
    NgSelectModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    NgSelectModule,
    NgxDatatableModule,
    FormsModule,
    ReactiveFormsModule,
    SearchBarComponent
  ]
})
export class SharedModule { }
