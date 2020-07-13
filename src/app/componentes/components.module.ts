import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLateralComponent } from './navbar-lateral/navbar-lateral.component';



@NgModule({
  declarations:[NavbarComponent,
                NavbarLateralComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    NavbarComponent,
    NavbarLateralComponent
  ]
})
export class ComponentsModule { }
