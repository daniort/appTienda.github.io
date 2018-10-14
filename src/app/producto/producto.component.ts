import { Component, OnInit } from '@angular/core';
import { AlmacenService } from '../servicios/almacen.service';
import { ProductoInterface } from '../modelos/productointerface';
import { NgForm } from '@angular/forms/src/directives/ng_form';



@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {
   productos: ProductoInterface={
           nombre:'',
           compra:0,
           cantidad:0,
           venta:0,
              };
  constructor(private AlmacenService  : AlmacenService) {
  }

  ngOnInit() {
    
  }
onGuardarProducto(myForm: NgForm){
  this.AlmacenService.addProduct(this.productos);
  }
}
