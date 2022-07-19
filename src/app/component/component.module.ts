import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { ChartsComponent } from './charts/charts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CreateAndEditProjectComponent } from './create-and-edit-project/create-and-edit-project.component';
import { ProjectListComponent } from './project-list/project-list.component';
import { ReferenceDocComponent } from './reference-doc/reference-doc.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateEditCounterMeasureComponent } from './create-edit-counter-measure/create-edit-counter-measure.component';
import { CreateEditRiskComponent } from './create-edit-risk/create-edit-risk.component';
import { CreateEditThreatsComponent } from './create-edit-threats/create-edit-threats.component';
import { CreateEditVulnerabilityComponent } from './create-edit-vulnerability/create-edit-vulnerability.component';
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { AppRoutingModule } from '../app-routing.module';
import { MatChipsModule } from '@angular/material/chips';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatMenuModule } from '@angular/material/menu';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    ChartsComponent,
    DashboardComponent,
    CreateAndEditProjectComponent,
    ProjectListComponent,
    ReferenceDocComponent,
    CreateEditCounterMeasureComponent,
    CreateEditRiskComponent,
    CreateEditThreatsComponent,
    CreateEditVulnerabilityComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    MatChipsModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatProgressSpinnerModule,
    MatExpansionModule,
    MatMenuModule,
    NgxChartsModule
  ]
})
export class ComponentModule { }
