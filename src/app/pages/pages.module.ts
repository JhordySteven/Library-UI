import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import {NgxPaginationModule} from 'ngx-pagination';

import { MarcaProductoComponent } from './marca-producto/marca-producto.component';
import { MntProductoComponent } from './mnt-producto/mnt-producto.component';
import { MntMenuComponent } from './mnt-menu/mnt-menu.component';
import { MntPedidoComponent } from './mnt-pedido/mnt-pedido.component';
import { CatProductoComponent } from './cat-producto/cat-producto.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';




@NgModule({
  declarations:[MarcaProductoComponent,
    MntProductoComponent,
  MntMenuComponent,MntPedidoComponent,
  CatProductoComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgxPaginationModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot()
  ],exports:[
    MarcaProductoComponent,
    MntProductoComponent,
    MntMenuComponent,
    MntPedidoComponent,
    CatProductoComponent
  ]
})
export class PagesModule { }


