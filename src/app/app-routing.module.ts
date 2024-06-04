import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { DetailsComponent } from './details/details.component';
import { CouComponent } from './pms/cou.component';
import { DglComponent } from './equip/dgl.component';


const routes: Routes = [
  {
    path:'main',
    component:MainComponent
  },
  {
    path:'home',
    component:DetailsComponent
  },
  {
    path:'PMsDetails',
    component:CouComponent
  },
  {
    path:'ELDetails',
    component:DglComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
