import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { LivreDorComponent } from './components/livre-dor/livre-dor.component';
import { EditLivreDorComponent } from './components/edit-livre-dor/edit-livre-dor.component';
import { LivreDorDetailComponent } from './components/livre-dor-detail/livre-dor-detail.component';
import { AddLivreDorComponent } from './components/add-livre-dor/add-livre-dor.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'livre-dor', component: LivreDorComponent },
  { path: 'livre/add', component: AddLivreDorComponent },
  { path: 'livre/:id', component: LivreDorDetailComponent },
  { path: 'livre/update/:id', component: EditLivreDorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
