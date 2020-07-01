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
import { LivreDorDetailComponent } from './components/livre-dor-detail/livre-dor-detail.component';

import { HttpClientModule } from '@angular/common/http'; //pour se connecter au json
import { FormsModule } from '@angular/forms'; //pour utiliser les formulaires;
import { ToastrModule } from 'ngx-toastr'; //pour utiliser les notifications avec le ToastrModule

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LivreDorComponent,
    EditLivreDorComponent,
    AddLivreDorComponent,
    MenuComponent,
    LivreDorDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule, //pour utiliser les formulaires
    ToastrModule.forRoot(), //pour utiliser les notifications
    HttpClientModule, //pour le back end

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
