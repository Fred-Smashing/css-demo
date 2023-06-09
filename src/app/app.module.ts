import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { Example1Component } from './components/example1/example1.component';
import { Example2Component } from './components/example2/example2.component';
import { Example3Component } from './components/example3/example3.component';
import { ProductCardComponent } from './components/product-card/product-card.component';
import { Example4Component } from './components/example4/example4.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    Example1Component,
    Example2Component,
    Example3Component,
    ProductCardComponent,
    Example4Component,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
