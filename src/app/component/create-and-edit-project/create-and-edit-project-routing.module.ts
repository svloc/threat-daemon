import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateAndEditProjectComponent } from './create-and-edit-project.component';

const routes: Routes = [
  { path: '', component:CreateAndEditProjectComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateAndEditProjectRoutingModule { }
