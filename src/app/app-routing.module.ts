import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { MarcaProductoComponent } from './pages/marca-producto/marca-producto.component';
import { CatProductoComponent } from './pages/cat-producto/cat-producto.component';
import { MntMenuComponent } from './pages/mnt-menu/mnt-menu.component';
import { MntPedidoComponent } from './pages/mnt-pedido/mnt-pedido.component';
import { MntProductoComponent } from './pages/mnt-producto/mnt-producto.component';
import { MntCatUsuarioComponent } from './pages/mnt-cat-usuario/mnt-cat-usuario.component';
import { MntCategoriaMenuComponent } from './pages/mnt-categoria-menu/mnt-categoria-menu.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'mntMarcaProducto',component:MarcaProductoComponent},
  {path:'mntCatProducto',component:CatProductoComponent},
  {path:'mntMenu',component:MntMenuComponent},
  {path:'mntPedido',component:MntPedidoComponent},
  {path:'mntProducto',component:MntProductoComponent},
  {path:'mntCatUsuario',component:MntCatUsuarioComponent},
  {path:'mntCatMenu',component:MntCategoriaMenuComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
