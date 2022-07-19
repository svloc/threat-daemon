import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateEditCounterMeasureComponent } from './create-edit-counter-measure.component';

const routes: Routes = [
  {path:"",component:CreateEditCounterMeasureComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreateEditCounterMeasureRoutingModule { }
