import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/Service/api-rest.service';
import {RutaImg} from '../../Service/general';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-mnt-producto',
  templateUrl: './mnt-producto.component.html',
  styleUrls: ['./mnt-producto.component.css']
})
export class MntProductoComponent implements OnInit {
  constructor(private fapiRest:ApiRestService,private toast:ToastrService) { }
  
  ngOnInit() {
    this.Producto;
    this.obtenerCategoria();
    this.obtenerMarca();
    this.obtenerImgProducto();
    this.obtenerProducto();
    
  }

  ruta=RutaImg;
  Producto={
    'productoId': 0,
    'categoriaId':0,
    'nombre':'',
    'precioUnidad':0,
    'stock':0,
    'fechaRegistro':'',
    'foto':'',
    'marcaProductoId':0,
    'estado':0
  }
  Categoria:any;
  Marca:any;
  archivo=null;
  img:any;
  objProducto:any;

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
  
  subirProducto(){
    const formData=new FormData();
    formData.append('archivo',this.archivo[0]);
    this.fapiRest.fapiPost('subir',formData) .subscribe(x=>{
      if(x=='ok'){
        this.toast.success('Archivo subido correctamente','¡AVISO!');
      }else{
        this.toast.error('El archivo no se subido','¡AVISO!');
      }
    })
  }

  obtenerImgProducto(){
    this.fapiRest.fapiGet('verfotos').subscribe(x=>{
      this.img= RutaImg+x ;
      console.log('imagen');
      console.log(this.img);
    })
  }

  registrarProducto(obj){
    this.Producto.categoriaId=parseInt(obj.categoriaId);
    this.Producto.marcaProductoId=parseInt(obj.marcaProductoId);
    this.Producto.precioUnidad=parseFloat(obj.precioUnidad);
    this.Producto.stock=parseInt(obj.stock);

    this.fapiRest.fapiPost('addProducto',this.Producto).subscribe(x=>{
      if(x=='ok'){
        this.subirProducto();
        this.toast.success('Se registro correctamente.','AVISO');
      }else{
        this.toast.warning('algo no salio bien....','AVISO');
      }
    })
  }

  selectFile(event){
    this.archivo=event.target.files;
    this.Producto.foto=this.archivo[0].name;
  }

  obtenerProducto(){
    this.fapiRest.fapiGet('listarProducto').subscribe(x=>{
      this.objProducto=x[0];
      for (let i = 0; i < this.objProducto.length; i++) {
        this.objProducto[i].foto=RutaImg+this.objProducto[i].foto;
      }
    })
  }
}
