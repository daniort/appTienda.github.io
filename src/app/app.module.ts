import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DeudoresComponent } from './deudores/deudores.component';
import { AlmacenComponent } from './almacen/almacen.component';
import { CajaComponent } from './caja/caja.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DeudoresComponent,
    AlmacenComponent,
    CajaComponent,
    
  ],
  imports: [
    BrowserModule,
    FormsModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
