import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { environment } from '../environments/environment';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireModule } from 'angularfire2';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeudoresComponent } from './deudores/deudores.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { CajaComponent } from './caja/caja.component';
import { ProductoComponent } from './producto/producto.component';

import {AlmacenService} from './servicios/almacen.service';
import { ClienteComponent } from './cliente/cliente.component';

const routes: Routes = [
     { path: '', component: HomeComponent },
      { path: 'almacen', component: AlmacenComponent },
      { path: 'deudores', component: DeudoresComponent },
      { path: 'nuevacompra', component: ProductoComponent },
      { path: 'nuevocliente', component: ClienteComponent },
      { path: '**', component: HomeComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DeudoresComponent,
    AlmacenComponent,
    CajaComponent,
    ProductoComponent,
    ClienteComponent,

  ],
  imports: [
    BrowserModule,
    FormsModule,

    RouterModule.forRoot(routes),
    AngularFireModule.initializeApp(environment.firebaseConfig, 'appTiendaBD'),
    AngularFirestoreModule,
  ],
  providers: [AlmacenService],
  bootstrap: [AppComponent]
})

export class AppModule { }
