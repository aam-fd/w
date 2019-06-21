import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './pages/main/main.component';
import { CategoryComponent } from './pages/category/category.component';

const routes: Routes = [
  {path: '', pathMatch: 'full', redirectTo: 'menu'},
  {path: 'menu', component: MainComponent},
  {path: 'menu/decor', component: CategoryComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
