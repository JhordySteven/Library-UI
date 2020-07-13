import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from "@angular/common/http";
import {NgxPaginationModule} from 'ngx-pagination';
import { ComponentsModule } from './componentes/components.module';
import { PagesModule } from './pages/pages.module';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule,
    ComponentsModule,
    PagesModule,
    /*BrowserAnimationsModule,
    ToastrModule.forRoot({
      timeOut :1000,
      progressBar:true
    }) */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
