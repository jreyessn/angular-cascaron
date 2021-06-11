import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from "./app.component";
import { CoreModule } from "./core/core.module";
import { BrowserModule } from "@angular/platform-browser";
import { LoginComponent } from './modules/pages/login/login.component';

@NgModule({
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CoreModule,
    ToastrModule.forRoot(),

  ],
  declarations: [AppComponent, LoginComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
