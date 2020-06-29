import { Component, OnInit } from '@angular/core';
import{CatProductoService} from "../../Service/cat-producto.service";
import{MarcaProductoService} from "../../Service/marca-producto.service";

@Component({
  selector: 'app-mnt-producto',
  templateUrl: './mnt-producto.component.html',
  styleUrls: ['./mnt-producto.component.css']
})
export class MntProductoComponent implements OnInit {

  constructor(private categoria:CatProductoService,private marca:MarcaProductoService) { }

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

}
