import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonsListComponent } from './pages/persons-list/persons-list.component';
import { RouterModule } from '@angular/router';
import { routes } from './persons.routing';
import { SharedModule } from '../../shared/shared.module';
import { TablePersonsComponent } from './components/table-persons/table-persons.component';
import { PersonsFormComponent } from './pages/persons-form/persons-form.component';

@NgModule({
  declarations: [PersonsListComponent, TablePersonsComponent, PersonsFormComponent],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forChild(routes),
  ],
  exports: [
    TablePersonsComponent
  ]
})
export class PersonsModule { }
