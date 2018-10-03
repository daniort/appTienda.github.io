import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-almacen',
  templateUrl: './almacen.component.html',
  styleUrls: ['./almacen.component.css']
})
export class AlmacenComponent implements OnInit {
  
  products: Array<Object> = [
  {
  'id':1,
  'nombre':'aceite123',
  'costocompra':20,
  'costoventa':25,
  'cantidad':24,
},
  {
  'id':2,
  'nombre':'aceite_patrona',
  'costocompra':20,
  'costoventa':24,
  'cantidad':23,
},
  {
  'id':3,
  'nombre':'azucar_kg',
  'costocompra':23,
  'costoventa':28,
  'cantidad':20,
},
  {
  'id':4,
  'nombre':'blancanieves_kg',
  'costocompra':20,
  'costoventa':25,
  'cantidad':12,
},
  {
  'id':5,
  'nombre':'blancanieves_mediokg',
  'costocompra':20,
  'costoventa':25,
  'cantidad':24,
},
  {
  'id':6,
  'nombre':'lata_atun',
  'costocompra':8,
  'costoventa':13,
  'cantidad':20,
},
  {
  'id':7,
  'nombre':'chiles_rajas',
  'costocompra':5,
  'costoventa':9,
  'cantidad':12,
},
  {
  'id':8,
  'nombre':'chiles_enteros',
  'costocompra':6,
  'costoventa':9,
  'cantidad':12,
  }
  ];
  constructor() { }

  ngOnInit() {
  }

}
