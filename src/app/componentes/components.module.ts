import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { AppRoutingModule } from '../app-routing.module';

import { NavbarComponent } from './navbar/navbar.component';
import { NavbarLateralComponent } from './navbar-lateral/navbar-lateral.component';



@NgModule({
  declarations:[NavbarComponent,
                NavbarLateralComponent],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    NavbarComponent,
    AppRoutingModule,
    NavbarLateralComponent
  ]
})
export class ComponentsModule { }
