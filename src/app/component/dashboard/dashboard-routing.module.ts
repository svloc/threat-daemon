import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
  { path: '', component: DashboardComponent,

  children: [
    { path: 'charts',
      loadChildren: () => import('./../charts/charts.module').then(m => m.ChartsModule),
    },
    { path: 'reference-doc',
      loadChildren: () => import('./../reference-doc/reference-doc.module').then(m => m.ReferenceDocModule),
    },
    { path: 'create-edit-counter-measure',
    loadChildren: () => import('./../create-edit-counter-measure/create-edit-counter-measure.module').then(m => m.CreateEditCounterMeasureModule),
    },
    { path: 'create-edit-risk',
    loadChildren: () => import('./../create-edit-risk/create-edit-risk.module').then(m => m.CreateEditRiskModule),
    },
    { path: 'create-edit-threats',
    loadChildren: () => import('./../create-edit-threats/create-edit-threats.module').then(m => m.CreateEditThreatsModule),
    },
    { path: 'create-edit-vulnerability',
    loadChildren: () => import('./../create-edit-vulnerability/create-edit-vulnerability.module').then(m => m.CreateEditVulnerabilityModule),
    },

  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }
