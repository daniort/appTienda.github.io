import { Component, OnInit } from '@angular/core';
import {ClienteInterface} from '../modelos/deudorinterface';
import {DeudorService} from ".././servicios/deudor.service";
import { NgForm } from '@angular/forms/src/directives/ng_form';
import    { FormGroup,   }    from '@angular/forms';



@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  deudas: ClienteInterface={
    nombre : '',
    cantidad : 0,
    descripcion: '',
    nota : '',
    }
  constructor(private DeudorService:DeudorService ) { }


  ngOnInit() {    }

   onGuardarDeuda(myForm:NgForm){
        this.DeudorService.addProduct(this.deudas);
      }


}
