import { Component,OnInit,TemplateRef } from '@angular/core';
import{CatProductoService} from "../../Service/cat-producto.service";
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-cat-producto',
  templateUrl: './cat-producto.component.html',
  styleUrls: ['./cat-producto.component.css']
})
export class CatProductoComponent implements OnInit {
  
  constructor(private CatProducto:CatProductoService,private modalService: BsModalService) { }
  ngOnInit() {
    this.obtenerCategoria();
  }

  total:number;
  p: number = 1;
  disabledInput=true;
  disabledRegistrar=false;
  disabledActualizar=false;
  disabledCancelar=false;
  categoriaProducto:any;
  modalRef: BsModalRef;
  MntCatProducto={
      'categoriaId':0,
      'nombre':'',
      'estado':0
    }

  obtenerCategoria(){
    this.CatProducto.obtenerCategoria().subscribe(x=>{
      this.categoriaProducto=x[0];
    })
  }

  registrarCategoria(obj){
    if(obj.estado==true){
      this.MntCatProducto.estado=1;
    }else{
      this.MntCatProducto.estado=0;
    }
    this.CatProducto.registrarCatProducto(this.MntCatProducto).subscribe(x=>{
      if(x=="ok"){
        this.limpiarInput();  
        this.obtenerCategoria();
      }else{
        console.log(x);
      }
    })
  } 
  obtenerDatos(obj){
    this.disabledInput=false;
    this.disabledActualizar=true;
    this.disabledCancelar=true;
    this.MntCatProducto=
    {
      'categoriaId':obj.categoriaId,
      'nombre':obj.nombre,
      'estado':obj.estado
    }
  }

  actualizarCategoria(obj){
    if(obj.estado==true){
      this.MntCatProducto.estado=1;
    }else{
      this.MntCatProducto.estado=0;
    }
    this.CatProducto.updateCatProducto(this.MntCatProducto).subscribe(x=>{
      if(x=="ok"){
      this.limpiarInput();  
      this.obtenerCategoria();
      this.disabledInput=true;
    }
      else{
        console.log(x);
      }
    })
  }
  agregarCat(){
    this.disabledInput=false;
    this.disabledRegistrar=true;
    this.disabledCancelar=true;
  }

  limpiarInput(){
    this.MntCatProducto=
    {
      'categoriaId':0,
      'nombre':'',
      'estado':0
    }
  }
  cancelar(){
    this.disabledInput=true;
    this.limpiarInput();
    if(this.disabledRegistrar==true){
     this.disabledRegistrar=false;
     this.disabledCancelar=false; 
    }else if(this.disabledActualizar==true){
      this.disabledActualizar=false;
      this.disabledCancelar=false;
    }
  }
  nombreActividad='';
  ModalEliminacion(template: TemplateRef<any>,obj){
    this.MntCatProducto.categoriaId=obj.categoriaId;
    this.nombreActividad=obj.nombre;
    this.modalRef = this.modalService.show(template);
  }

  deleteCategoria(){
    console.log(this.MntCatProducto);
    this.CatProducto.deleteCatProducto(this.MntCatProducto).subscribe(x=>{
      
    console.log(this.MntCatProducto);
      if(x=="ok"){
      this.obtenerCategoria();
      this.disabledInput=true;
      this.modalRef.hide();
    }else{
      console.log(x);
    } 
  });
  }
}
