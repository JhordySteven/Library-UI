import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { PrincipalAdminComponent } from './componentes/principal-admin/principal-admin.component';
import { MntMenuComponent } from './componentes/mnt-menu/mnt-menu.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { HttpClientModule } from "@angular/common/http";
import { CatProductoComponent } from './componentes/cat-producto/cat-producto.component';
import { MarcaProductoComponent } from './componentes/marca-producto/marca-producto.component';
import {NgxPaginationModule} from 'ngx-pagination';
import { MntPedidoComponent } from './componentes/mnt-pedido/mnt-pedido.component';
import { MntProductoComponent } from './componentes/mnt-producto/mnt-producto.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    PrincipalComponent,
    PrincipalAdminComponent,
    MntMenuComponent,
    CatProductoComponent,
    MarcaProductoComponent,
    MntPedidoComponent,
    MntProductoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ModalModule.forRoot(),
    HttpClientModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
