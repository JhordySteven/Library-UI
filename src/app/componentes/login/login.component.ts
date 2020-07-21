import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  verModalLogin=true;
  verModalRegister=false;

  crearCuenta(){
    this.verModalLogin=false;
    this.verModalRegister=true;
  }

}
