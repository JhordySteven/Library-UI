import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  obtenerUsuario(){
    return this.http.get("http://localhost:8888/api/listarRol");
  }

  createUsuario(){
    debugger
    return this.http.get("http://localhost:8888/api/mntUsuario");
  }
}
