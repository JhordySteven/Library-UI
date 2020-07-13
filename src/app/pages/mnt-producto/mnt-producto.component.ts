import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/Service/api-rest.service';
import {RutaImg} from '../../Service/general';
//import { ToastrService } from 'ngx-toastr';


@Component({
  selector: 'app-mnt-producto',
  templateUrl: './mnt-producto.component.html',
  styleUrls: ['./mnt-producto.component.css']
})
export class MntProductoComponent implements OnInit {
 
  constructor(private fapiRest:ApiRestService/*,private toast:ToastrService */) { }

  ngOnInit() {
    this.obtenerCategoria();
    this.obtenerMarca();
    this.obtenerImgProducto();
  }
 
  ruta=RutaImg;

  Producto={
    'productoId':0,
    'categoriaId':'',
    'nombre':'',
    'precioUnidad':0,
    'stock':0,
    'fechaRegistro':'',
    'foto':'',
    'marcaProductoId':'',
    'estado':1
  }
  Categoria:any;
  Marca:any;
  obtenerCategoria(){
    this.fapiRest.fapiGet('listarCatProducto').subscribe(x=>{
      this.Categoria=x[0];
  }); 
  }
  obtenerMarca(){
  this.fapiRest.fapiGet('listarMarcaProducto').subscribe(x=>{
    this.Marca=x[0];
}); 
  }
  archivo=null;
  subirProducto(){
    console.log(this.archivo);
    const formData=new FormData();
    formData.append('archivo',this.archivo);
    console.log(this.archivo);
    /*this.fapiRest.fapiPost('subir',formData) .subscribe(x=>{
      console.log(x);
    })*/
  }

  img:any;
  obtenerImgProducto(){
    this.fapiRest.fapiGet('verfotos').subscribe(x=>{
      console.log(x);
      this.img= RutaImg+x ;
      console.log(this.img);
    })
  }
  registrarProducto(){
    debugger
    let array1=this.archivo.split('fakepath');
    let foto1=array1[1].substring(1);
    this.Producto.foto=foto1;
    console.log(this.Producto);
    this.fapiRest.fapiPost('addProducto',this.Producto).subscribe(x=>{
      console.log(x);
      if(x=='ok'){
        //this.toast.success('Se registro correctamente.','AVISO');
      }else{
        //this.toast.warning('algo no salio bien....','AVISO');
      }
    })
  }
}
