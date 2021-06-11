import { Routes } from "@angular/router";
import { PersonsFormComponent } from "./pages/persons-form/persons-form.component";
import { PersonsListComponent } from './pages/persons-list/persons-list.component'

export const routes: Routes = [
  {
    path: "", 
    component: PersonsListComponent,
    data: {
      title: "Personas",
    }
  },
  {
    path: "add", 
    component: PersonsFormComponent,
    data: {
      title: "Registrar Persona",
    }
  },

]