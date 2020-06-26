import { Component,OnInit } from '@angular/core';
import{CatProductoService} from "../../Service/cat-producto.service";
@Component({
  selector: 'app-cat-producto',
  templateUrl: './cat-producto.component.html',
  styleUrls: ['./cat-producto.component.css']
})
export class CatProductoComponent implements OnInit {
  total:number;
  p: number = 1;
  disabledInput=true;
  constructor(private CatProducto:CatProductoService) { }
  ngOnInit() {
    this.obtenerCategoria();
  }
  categoriaProducto:any;
  MntCatProducto=
    {
      'categoriaId':0,
      'nombre':'',
      'estado':0
    }
  obtenerCategoria(){
    this.CatProducto.obtenerCategoria().subscribe(x=>{
      console.log(x[0]);
      this.categoriaProducto=x[0];
      console.log(this.categoriaProducto);
    })
  }
  registrarCategoria(){
    console.log(this.MntCatProducto);
    this.CatProducto.registrarCatProducto(this.MntCatProducto).subscribe(x=>{
      console.log(x);
    })
  } 
  obtenerDatos(obj){
    console.log(obj);
    this.MntCatProducto=
    {
      'categoriaId':obj.categoriaId,
      'nombre':obj.nombre,
      'estado':obj.estado
    }
  }

  actualizarCategoria(){
    this.CatProducto.updateCatProducto(this.MntCatProducto).subscribe(x=>{
      console.log(x);
      this.MntCatProducto=
    {
      'categoriaId':0,
      'nombre':'',
      'estado':0
    }
      this.obtenerCategoria();
    })
  }
  agregarCat(){
    this.disabledInput=false;
  }
}
