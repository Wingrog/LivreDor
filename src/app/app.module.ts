import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { LivreDorComponent } from './components/livre-dor/livre-dor.component';
import { EditLivreDorComponent } from './components/edit-livre-dor/edit-livre-dor.component';
import { AddLivreDorComponent } from './components/add-livre-dor/add-livre-dor.component';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivreDorComponent,
    EditLivreDorComponent,
    AddLivreDorComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
