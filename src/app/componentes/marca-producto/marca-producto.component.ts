import { Component, TemplateRef,OnInit} from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import{MarcaProductoService} from "../../Service/marca-producto.service";

@Component({
  selector: 'app-marca-producto',
  templateUrl: './marca-producto.component.html',
  styleUrls: ['./marca-producto.component.css']
})
export class MarcaProductoComponent implements OnInit {
  constructor(private modalService: BsModalService,private marcaProducto:MarcaProductoService) { }

  ngOnInit() {
    this.obtenerMarca();
  }

  total:number;
  p: number = 1;
  disabledInput=true;
  disabledRegistrar=false;
  disabledActualizar=false;
  disabledCancelar=false;
  marcaProductos:any;
  modalRef: BsModalRef;
  MntMarcaProducto={
      'marcaProductoId':0,
      'nombre':'',
      'estado':0
    }

    obtenerMarca(){
      this.marcaProducto.obtenerMarcaProducto().subscribe(x=>{
        this.marcaProductos=x[0];
      })
    }
    registrarMarca(obj){
      console.log(obj);
      if(obj.estado==true){
        this.MntMarcaProducto.estado=1;
      }else{
        this.MntMarcaProducto.estado=0;
      }
      this.marcaProducto.registrarMarcaProducto(this.MntMarcaProducto).subscribe(x=>{
        if(x=="ok"){
          this.limpiarInput();  
          this.obtenerMarca();
          this.disabledInput=true;
          this.disabledRegistrar=false;
          this.disabledActualizar=false;
          this.disabledCancelar=false;
        }else{
          console.log(x);
        }
      })
    } 
    obtenerDatos(obj){
      this.disabledInput=false;
      this.disabledActualizar=true;
      this.disabledCancelar=true;
      this.MntMarcaProducto=
      {
        'marcaProductoId':obj.marcaProductoId,
        'nombre':obj.nombre,
        'estado':obj.estado
      }
    }
  
    actualizarMarca(obj){
      if(obj.estado==true){
        this.MntMarcaProducto.estado=1;
      }else{
        this.MntMarcaProducto.estado=0;
      }
      this.marcaProducto.updateMarcaProducto(this.MntMarcaProducto).subscribe(x=>{
        if(x=="ok"){
        this.limpiarInput();  
        this.obtenerMarca();
        this.disabledInput=true;
        this.disabledRegistrar=false;
        this.disabledActualizar=false;
        this.disabledCancelar=false;
      }
        else{
          console.log(x);
        }
      })
    }
    agregarMarca(){
      this.disabledInput=false;
      this.disabledRegistrar=true;
      this.disabledCancelar=true;
    }
  
    limpiarInput(){
      this.MntMarcaProducto=
      {
        'marcaProductoId':0,
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
      this.MntMarcaProducto.marcaProductoId=obj.marcaProductoId;
      this.nombreActividad=obj.nombre;
      this.modalRef = this.modalService.show(template);
    }
  
    deleteMarca(){
      this.marcaProducto.deleteMarcaProducto(this.MntMarcaProducto).subscribe(x=>{
        if(x=="ok"){
        this.obtenerMarca();
        this.disabledInput=true;
        this.modalRef.hide();
      }else{
        console.log(x);
      } 
    });
    }
    Activarmodal(template: TemplateRef<any>,obj){
      this.MntMarcaProducto.marcaProductoId=obj.marcaProductoId;
      this.nombreActividad=obj.nombre;
      this.modalRef = this.modalService.show(template);
    }
  
    activarMarca(){
      this.marcaProducto.activarMarcaProducto(this.MntMarcaProducto).subscribe(x=>{
        if(x=="ok"){
          this.obtenerMarca();
          this.modalRef.hide();
        }else{
          console.log(x);
        }
      })
    }
}
