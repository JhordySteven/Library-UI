import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import{RutaMvc} from './General';

@Injectable({
  providedIn: 'root'
})
export class MarcaProductoService {

  constructor(private http:HttpClient) { }

  obtenerMarcaProducto(){
    return this.http.get(RutaMvc+"listarMarcaProducto");
  }
  registrarMarcaProducto(marca:any){
    return this.http.post(RutaMvc+"addMarcaProducto",marca,{responseType: 'text'});  
  }
  updateMarcaProducto(marca:any){
    return this.http.put(RutaMvc+"updateMarcaProducto",marca,{responseType: 'text'});
  }
  activarMarcaProducto(marca:any){
    return this.http.put(RutaMvc+"activateMarcaProducto",marca,{responseType: 'text'});
  }
  deleteMarcaProducto(marca:any){
    return this.http.put(RutaMvc+"deleteMarcaProducto",marca,{responseType: 'text'});
  }

}
