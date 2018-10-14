import { Component, OnInit } from '@angular/core';
import {ClienteInterface} from  ".././modelos/deudorinterface";
import {DeudorService} from ".././servicios/deudor.service";

@Component({
  selector: 'app-deudores',
  templateUrl: './deudores.component.html',
  styleUrls: ['./deudores.component.css']
})
export class DeudoresComponent implements OnInit {
  clienteitem: ClienteInterface[];
  constructor( public DeudorService: DeudorService  ) {
}
  ngOnInit() {
      this.DeudorService.getDeudas().subscribe(deudas =>{
        this.clienteitem=deudas;
        console.log("debi cargar ya ");
        console.log(this.clienteitem);
        console.log("Arreglo de Deudas Obtenidos ");
      });
  }
}
