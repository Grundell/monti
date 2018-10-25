import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DetailedComponent } from './content/detailed/detailed.component';
import { ClearCurrentResolver } from './shared/resolver/clearCurrent.resolver'

const routes: Routes = [
  { path:'', 
    component: HomeComponent,
    resolve: { data: ClearCurrentResolver}
  },
  { path:'detailed/:city', component: DetailedComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
