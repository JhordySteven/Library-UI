import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import{RutaMvc} from './General';

@Injectable({
  providedIn: 'root'
})
export class CatProductoService {
  constructor(private http:HttpClient) { }
  obtenerCategoria(){
    return this.http.get(RutaMvc+"listarCatProducto"); 
  }
  registrarCatProducto(categoria:any):Observable<any>{
    return this.http.post(RutaMvc+"mntCatProducto",categoria,
    {responseType: 'text'});
  }
  updateCatProducto(categoria:any):Observable<any>{
    return this.http.put(RutaMvc+"updtCatProducto",categoria,{responseType: 'text'});
  }
} 
