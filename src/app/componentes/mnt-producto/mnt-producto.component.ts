import { Component, OnInit } from '@angular/core';
import{CatProductoService} from "../../Service/cat-producto.service";
import{MarcaProductoService} from "../../Service/marca-producto.service";
import{MntProductoService} from "../../Service/mnt-producto.service";

@Component({
  selector: 'app-mnt-producto',
  templateUrl: './mnt-producto.component.html',
  styleUrls: ['./mnt-producto.component.css']
})
export class MntProductoComponent implements OnInit {

  constructor(private categoria:CatProductoService,private marca:MarcaProductoService,
              private producto:MntProductoService) { }

  ngOnInit() {
    this.obtenerCategoria();
    this.obtenerMarca();
  }

  Categoria:any;
  Marca:any;
  obtenerCategoria(){
    this.categoria.obtenerCategoria().subscribe(x=>{
        this.Categoria=x[0];
    });
  }
  obtenerMarca(){
    this.marca.obtenerMarcaProducto().subscribe(x=>{
      this.Marca=x[0];
  });
  }

  foto:any;
  subirfoto(obj){
    console.log(obj);
    this.producto.subirFoto(obj).subscribe(x=>{
      console.log(x);
    })
  }
}
