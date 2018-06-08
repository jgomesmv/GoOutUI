import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlanRoutingModule } from './plan-routing.module';
import { WizardComponent } from './components/wizard/wizard.component';

@NgModule({
  imports: [
    CommonModule,
    PlanRoutingModule
  ],
  declarations: [WizardComponent]
})
export class PlanModule { }
