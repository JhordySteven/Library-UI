import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/Service/api-rest.service';

@Component({
  selector: 'app-navbar-lateral',
  templateUrl: './navbar-lateral.component.html',
  styleUrls: ['./navbar-lateral.component.css']
})
export class NavbarLateralComponent implements OnInit {

  constructor(private fapi:ApiRestService) { }
  objMenu:any;

  ngOnInit() {
    this.listarMenu();
  }

  listarMenu(){
    this.fapi.fapiGet('listarMenu').subscribe(x=>{
        this.objMenu=x[0];
    })
  }
}
