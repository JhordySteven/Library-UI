import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CatProductoService {
  constructor(private http:HttpClient) { }

  obtenerCategoria(){
    return this.http.get("http://localhost:8888/api/listarCatProducto");
  }
  registrarCatProducto(categoria:any):Observable<any>{
    return this.http.post("http://localhost:8888/api/mntCatProducto",categoria,
    {responseType: 'text'});
  }
  updateCatProducto(categoria:any):Observable<any>{
    return this.http.put("http://localhost:8888/api/updtCatProducto",categoria,{responseType: 'text'});
  }
} 
