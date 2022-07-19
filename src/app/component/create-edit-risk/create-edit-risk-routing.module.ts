import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditRiskComponent } from './create-edit-risk.component';

const routes: Routes = [
  {path:"",component:CreateEditRiskComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEditRiskRoutingModule { }
