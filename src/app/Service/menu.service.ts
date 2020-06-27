import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import{RutaMvc} from './General';

@Injectable({
  providedIn: 'root'
})
export class MenuService {

  constructor(private http:HttpClient) { }

  obtenerUsuario(){
    return this.http.get(RutaMvc+"listarRol");
  }

  createUsuario(){
    debugger
    return this.http.get(RutaMvc+"mntUsuario");
  }
}
