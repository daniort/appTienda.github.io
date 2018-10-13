import { Injectable } from '@angular/core';
import { ProductoInterface } from  "../modelos/productointerface";
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import {Observable} from 'rxjs';
import {map} from   'rxjs/operators';
import { ProductoComponent } from '../producto/producto.component';


@Injectable({
  providedIn: 'root'
})

export class AlmacenService {
    private ProductosColletion : AngularFirestoreCollection<ProductoInterface>;
    productos : Observable<ProductoInterface[ ]> ;
    productosDoc: AngularFirestoreDocument<ProductoInterface>;

    constructor( public db: AngularFirestore) {
      //this.productos=db.collection('producto').valueChanges();
      this.ProductosColletion = db.collection<ProductoInterface >('productos');
      this.productos= this.ProductosColletion.snapshotChanges().pipe(
        map(actions => actions.map(a=>{
          const data = a.payload.doc.data() as ProductoInterface;
          const id =a.payload.doc.id;
          return {id, ...data};
        }))
      );
   }
  getProducts(){
    return this.productos;
  }
  addProduct(producto: ProductoInterface){
    this.ProductosColletion.add(producto);
    console.log("Producto Agregado");
  }
  deleteProduct(){
    console.log("Producto Eliminado! :(")
  }
  updateProduct(){
    console.log("Información de Producto  Actualizado!");
  }
}
