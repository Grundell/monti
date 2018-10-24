import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailedComponent } from './content/detailed/detailed.component';

const routes: Routes = [
  { path:'', component: HomeComponent},
  { path:'detailed/:id', component: DetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
