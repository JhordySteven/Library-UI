import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './componentes/login/login.component';
import { PrincipalComponent } from './componentes/principal/principal.component';
import { MntMenuComponent } from './componentes/mnt-menu/mnt-menu.component';
import { PrincipalAdminComponent } from './componentes/principal-admin/principal-admin.component';
import { CatProductoComponent } from './componentes/cat-producto/cat-producto.component';
import { MarcaProductoComponent } from './componentes/marca-producto/marca-producto.component';
import { MntProductoComponent } from './componentes/mnt-producto/mnt-producto.component';

const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path:'principal',component:PrincipalComponent},
  {path:'menu',component:MntMenuComponent},
  {path:'dashboard',component:PrincipalAdminComponent},
  {path:'catProducto',component:CatProductoComponent},
  {path:'marcaProducto',component:MarcaProductoComponent},
  {path:'mntProducto',component:MntProductoComponent}
]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
