import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatalogRoutingModule } from './catalog-routing.module';
import { EventComponent } from './components/event/event.component';
import { PlaceToEatComponent } from './components/place-to-eat/place-to-eat.component';
import { PlaceToDrinkComponent } from './components/place-to-drink/place-to-drink.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [EventComponent, PlaceToEatComponent, PlaceToDrinkComponent]
})
export class CatalogModule { }
