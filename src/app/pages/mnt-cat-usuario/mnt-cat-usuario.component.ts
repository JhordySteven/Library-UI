import { Component,TemplateRef, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/Service/api-rest.service';
import { ToastrService } from 'ngx-toastr';
import { BsModalService,BsModalRef } from 'ngx-bootstrap/modal';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-mnt-cat-usuario',
  templateUrl: './mnt-cat-usuario.component.html',
  styleUrls: ['./mnt-cat-usuario.component.css']
})
export class MntCatUsuarioComponent implements OnInit {

  constructor(private modalService: BsModalService,private fapiRest:ApiRestService,private toast:ToastrService) { }
  
  ngOnInit() {
    this.obtenerCatUsuario();
  }

  modalRef: BsModalRef;
  disabledInput=true;
  disabledRegistrar=false;
  disabledActualizar=false;
  disabledCancelar=false;
  catUsuario:any;

  MntCatUsuario={
    categoriaUsuId:0,
    nombre:'',
    estado:0
  }
  nombreActividad='';

  obtenerCatUsuario(){
    this.fapiRest.fapiGet('listarCatUsuario').subscribe(x=>{
      this.catUsuario=x[0];
      console.log(this.catUsuario);
      console.log(x);
    })
  }

  registrarCatUsu(obj){
    if(this.MntCatUsuario.nombre==''){
        this.toast.warning('Debe ingresar un nombre.','¡AVISO!');
        return;
    }
    if(obj.estado==true){
      this.MntCatUsuario.estado=1;
    }else{
      this.MntCatUsuario.estado=0;
    }
    this.fapiRest.fapiPost('mntCatUsuario',this.MntCatUsuario).subscribe(x=>{
        if(x=='ok'){
          this.toast.success('Se registro correctamente.','¡AVISO!');
          this.limpiarInput();
        }else{
          this.toast.error('Algo no salio bien..','¡AVISO!');
        }
    })
  }
  agregarCat(){
    this.disabledInput=false;
    this.disabledRegistrar=true;
    this.disabledCancelar=true;
  }
  limpiarInput(){
    this.MntCatUsuario.nombre='';
    this.MntCatUsuario.estado=0;
  }
  updateCatUsuario(obj){
    if(obj.estado==true){
      this.MntCatUsuario.estado=1;
    }else{
      this.MntCatUsuario.estado=0;
    }
    this.fapiRest.fapiPut('updtCatUsuario',this.MntCatUsuario).subscribe(x=>{
      if(x=='ok'){
        this.toast.success('Se actualizo correctamente.','¡AVISO!');
        this.obtenerCatUsuario();
        this.limpiarInput();
        this.cancelar();
      }else{
        this.toast.error('Algo no salio bien','¡AVISO!');
      }    
    })
  }
  cancelar(){
  this.disabledInput=true;
  this.disabledRegistrar=false;
  this.disabledActualizar=false;
  this.disabledCancelar=false;
  this.limpiarInput();
  }

  obtenerDatos(obj){
    this.disabledInput=false;
    this.disabledActualizar=true;
    this.disabledCancelar=true;
    this.MntCatUsuario.categoriaUsuId=obj.categoriaUsuId;
    this.MntCatUsuario.nombre=obj.nombre;
    this.MntCatUsuario.estado=obj.estado;
  }
  
  ModalEliminacion(template: TemplateRef<any>,obj){
    this.MntCatUsuario.categoriaUsuId=obj.categoriaUsuId;
    this.nombreActividad=obj.nombre;
    this.modalRef = this.modalService.show(template);
  }

  deleteCategoriaUsu(){
    this.fapiRest.fapiPut('deleteCatUsuario',this.MntCatUsuario).subscribe(x=>{
      if(x=='ok'){
        this.toast.success('Se elimino correctamente.','¡AVISO!')
        this.modalRef.hide();
        this.obtenerCatUsuario();
      }else{
        this.toast.error('Algo no salio bien..','¡AVISO!');
      }
    })
  }
  Activarmodal(template: TemplateRef<any>,obj){
    this.MntCatUsuario.categoriaUsuId=obj.categoriaUsuId;
    this.nombreActividad=obj.nombre;
    this.modalRef = this.modalService.show(template);
  }
  
  activarCategoria(){
    this.fapiRest.fapiPut('activeCatUsuario',this.MntCatUsuario).subscribe(x=>{
      if(x=="ok"){
        this.obtenerCatUsuario();
        this.toast.success('Se activo la categoria correctamente.','¡AVISO!')
        this.modalRef.hide();
        this.obtenerCatUsuario();
      }else{
        this.toast.error('Algo salio no salio bien..','¡AVISO!');
      }
    })
  }
}
