import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import{RutaMvc} from './General';

@Injectable({
  providedIn: 'root'
})
export class ApiRestService {

  constructor(private http:HttpClient) { }

  fapiPost(api,obj:any):Observable<any>{
    return this.http.post(RutaMvc+api,obj,{responseType: 'text'});
  }

  fapiGet(api){
    return this.http.get(RutaMvc+api);
  }

  fapiPut(api,obj:any):Observable<any>{
    return this.http.put(RutaMvc+api,obj,{responseType: 'text'});
  }
}
