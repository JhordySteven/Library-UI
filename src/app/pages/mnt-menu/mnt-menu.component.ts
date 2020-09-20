import { Component, OnInit,TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ApiRestService } from 'src/app/Service/api-rest.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-mnt-menu',
  templateUrl: './mnt-menu.component.html',
  styleUrls: ['./mnt-menu.component.css']
})
export class MntMenuComponent implements OnInit {
  modalRef: BsModalRef;
  constructor(private modalService: BsModalService,
              private fapi:ApiRestService,
              private toast:ToastrService) { }
  

  ngOnInit() {
    this.listarMenu();
  }
  
  disabledInput=true;
  disabledRegistrar=false;
  disabledActualizar=false;
  disabledCancelar=false;
  objMenu:any;

  MntMenu={
    idMenu:0,
    nombre:'',
    tipoMenu:0,
    ruta:'',
    estado:1
  }

  ObjTipoMenu=[
    {
      id:1,
      nombre:'Menú'
    },
    {
      id:2,
      nombre:'Sub Menu'
    }
  ]
  inputRuta=false;
  onChangeRuta(){
    if(this.MntMenu.tipoMenu==2){
      this.inputRuta=true;
    }else{
      this.inputRuta=false;
    }
  }

  registrarMenu(obj){
    this.MntMenu.tipoMenu=parseInt(obj.tipoMenu);
    if(obj.estado=true){
      this.MntMenu.estado=1;
    }else if(obj.estado=false){
      this.MntMenu.estado=0;
    }
    console.log(this.MntMenu);
    this.fapi.fapiPost('addMenu',this.MntMenu).subscribe(x=>{
      console.log(x);
      if(x=='ok'){
        this.toast.success('Se registro correctamente.','AVISO');
        this.listarMenu();
      }else{
        this.toast.error('Algo no salio bien.','AVISO');
      }
    })
  }

  listarMenu(){
    this.fapi.fapiGet('listarMenu').subscribe(x=>{
        this.objMenu=x[0];
    })
  }

  agregarMenu(){
      this.disabledInput=false;
      this.disabledRegistrar=true;
      this.disabledCancelar=true;
      this.MntMenu.estado=1;
  }
    limpiarInput(){
      this.MntMenu.nombre='';
      this.MntMenu.tipoMenu=0;
      this.MntMenu.estado=0;
      this.MntMenu.ruta='';
    }
    cancelar(){
      this.disabledInput=true;
      this.disabledRegistrar=false;
      this.disabledActualizar=false;
      this.disabledCancelar=false;
      this.limpiarInput();
      this.inputRuta=false;
      }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

  obtenerDatos(obj){
    this.disabledInput=false;
    this.disabledActualizar=true;
    this.disabledCancelar=true;
    this.disabledRegistrar=false;
    this.MntMenu={
      'idMenu': obj.idMenu,
      'nombre':obj.nombre,
      'tipoMenu':obj.tipoMenu,
      'ruta':obj.ruta,
      'estado':obj.estado
    }
    this.onChangeRuta();
  }
  actualizarMenu(obj){
    this.MntMenu.tipoMenu=parseInt(obj.tipoMenu);
    if(obj.estado=true){
      this.MntMenu.estado=1;
    }else if(obj.estado=false){
      this.MntMenu.estado=0;
    }
    console.log(this.MntMenu);
    this.fapi.fapiPut('updateMenu',this.MntMenu).subscribe(x=>{
      if(x=='ok'){
        this.toast.success('Se actualizo correctamente.','AVISO');
        this.listarMenu();
        this.limpiarInput();
        this.cancelar();
      }else{
        this.toast.error('Algo no salio bien.','AVISO');
      }
    })
  }
  nombreActividad="";
  ModalEliminacion(template: TemplateRef<any>,obj){
    this.modalRef = this.modalService.show(template);
    this.nombreActividad=obj.nombre;
  }
  deleteMenu(){
    this.fapi.fapiPut('deleteMenu',this.MntMenu).subscribe(x=>{
      if(x=='ok'){
        this.toast.success('Se elimino correctamente.','AVISO');
        this.listarMenu();
      }else{
        this.toast.error('Algo no salio bien.','AVISO');
      }
    })
  }
  activarMenu(template: TemplateRef<any>){
    this.fapi.fapiPut('activateMenu',this.MntMenu).subscribe(x=>{
      if(x=='ok'){
        this.toast.success('Se elimino correctamente.','AVISO');
        this.listarMenu();
        this.modalRef.hide();
      }else{
        this.toast.error('Algo no salio bien.','AVISO');
      }
    })
  }
  Activarmodal(template: TemplateRef<any>,obj){
    this.MntMenu.idMenu=obj.idMenu;
    this.nombreActividad=obj.nombre;
    this.modalRef = this.modalService.show(template);
  }


}
