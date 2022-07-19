import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditThreatsComponent } from './create-edit-threats.component';

const routes: Routes = [
  {path:"",component:CreateEditThreatsComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEditThreatsRoutingModule { }
