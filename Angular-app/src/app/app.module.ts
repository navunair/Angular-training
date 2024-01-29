import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { BookRetailComponent } from './book-retail/book-retail.component';
import { BookProductComponent } from './book-product/book-product.component';
import { BookHelperService } from './book-helper.service';
import { backgroundBlue } from './book-product/book-product.directive';



@NgModule({
  declarations: [
    AppComponent,
    BookProductComponent,
    backgroundBlue
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BookRetailComponent
  ],
  providers: [ BookHelperService
   
  ],
  exports: [backgroundBlue],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
