import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-deudores',
  templateUrl: './deudores.component.html',
  styleUrls: ['./deudores.component.css']
})
export class DeudoresComponent implements OnInit {
  ids:number[];
  nombres:string[];
  deudas:number[];
  descrips:string[];
  notas:string[];
  constructor() {
  this.ids=[1,2,3,4,5,];
  this.nombres= ['Maria Morelos', 'jose Ruiz', 'juan Juanito','raul','jorge','micky'];
  this.deudas=[100,28,20,10,90];
  this.descrips= ['huevos', 'pan', 'leche','libreta','mochila'];
  this.notas=['soy una nota','dijo que venia al dia siguiente'];
}
  ngOnInit() {
  }

}
