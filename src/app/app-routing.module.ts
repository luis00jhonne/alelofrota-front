import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DashboardComponent} from './templates/dashboard/dashboard.component';
import {VehicleDetailComponent} from './vehicle-detail/vehicle-detail.component';
import {VehicleListComponent} from './vehicle-list/vehicle-list.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      {
        path: 'vehicle-detail',
        component: VehicleDetailComponent
      },
      {
        path: 'vehicle-detail/:id',
        component: VehicleDetailComponent
      },
      {
        path: 'vehicle-list',
        component: VehicleListComponent
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
