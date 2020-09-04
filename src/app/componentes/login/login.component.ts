import { Component, OnInit } from '@angular/core';
import { ApiRestService } from 'src/app/Service/api-rest.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fapiRest:ApiRestService,private toast:ToastrService) { }

  ngOnInit() {
  }
  objSexo=[{
    idSexo:0,
    nombre:'Masculino'
  },
  {
    idSexo:1,
    nombre:'Femenino'
  }]


  verModalLogin=true;
  verModalRegister=false;
  MntLogin={
    'usuarioId':0,
    'usuario':'',
    'contrasenia':'',
    'categoriaUsuId':0,
    'nombre':'',
    'apellido:':'',
    'fechaNacimiento':'',
    'sexo':0,
    'foto':''
  }

  crearCuenta(){
    this.verModalLogin=false;
    this.verModalRegister=true;
  }
  archivo=null;

  selectFile(event){
    this.archivo=event.target.files;
    this.MntLogin.foto=this.archivo[0].name;
  }
  registrarUsuario(obj){
    this.MntLogin.categoriaUsuId=2;
    this.MntLogin.sexo=parseInt(obj.sexo);
    console.log(this.MntLogin);
    this.fapiRest.fapiPost('registrarUsuarioCliente',this.MntLogin).subscribe(x=>{
      if(x=='ok'){
        this.toast.success('Archivo subido correctamente','¡AVISO!');
        this.subirProducto();
      }else{
        this.toast.error('El archivo no se subido','¡AVISO!');
      }
    })
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

}
