import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoriesComponent } from './pages/categories/categories.component';
import { CategoryItemsComponent } from './pages/category-items/category-items.component';
import { ItemComponent } from './pages/item/item.component';
import { CartComponent } from './pages/cart/cart.component';
import { HeaderComponent } from './chunks/header/header.component';
import { ImageButtonComponent } from './bits/image-button/image-button.component';
import { TextButtonComponent } from './bits/text-button/text-button.component';
import { TextFieldComponent } from './bits/text-field/text-field.component';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryItemsComponent,
    ItemComponent,
    CartComponent,
    HeaderComponent,
    ImageButtonComponent,
    TextButtonComponent,
    TextFieldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
