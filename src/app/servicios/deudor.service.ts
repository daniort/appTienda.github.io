import { Injectable } from '@angular/core';
import { ClienteInterface } from  "../modelos/deudorinterface";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from   'rxjs/operators';
import { ClienteComponent } from '../cliente/cliente.component';

@Injectable({
  providedIn: 'root'
})
export class DeudorService {
  private DeudasColletion : AngularFirestoreCollection<ClienteInterface>;
  deudas : Observable<ClienteInterface[ ]> ;
  deudasDoc: AngularFirestoreDocument<ClienteInterface>;

  constructor(public db: AngularFirestore) {
    //this.productos=db.collection('producto').valueChanges();
    this.DeudasColletion = db.collection<ClienteInterface >('deudas');
    this.deudas= this.DeudasColletion.snapshotChanges().pipe(
      map(actions => actions.map(a=>{
        const data = a.payload.doc.data() as ClienteInterface;
        const id =a.payload.doc.id;
        return {id, ...data};
      }))
    );
  }
  getDeudas(){
    console.log("este es el get deudas");
    return this.deudas;
  }
  addProduct(deudas: ClienteInterface){
    this.DeudasColletion.add(deudas);
    console.log("Producto Agregado");
  }
  deleteProduct(){
    console.log("Producto Eliminado! :(")
  }
  updateProduct(){
    console.log("Información de Producto  Actualizado!");
  }
}
