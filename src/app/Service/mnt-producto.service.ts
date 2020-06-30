import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class MntProductoService {

  constructor(private http:HttpClient) { }

  subirFoto(foto:any){
    return this.http.post('localhost:8888/api/subirfoto',foto,{responseType: 'text'});
  }
}
