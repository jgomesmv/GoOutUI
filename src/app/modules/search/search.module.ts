import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { SearchRoutingModule } from './search-routing.module';

import { HomePageComponent } from './home-page/home-page.component';
import { SearchComponent } from './search/search.component';
import { SearchListComponent } from './search-list/search-list.component';
import { SearchListLeftFiltersComponent } from './search-list-left-filters/search-list-left-filters.component';
import { SearchListRightFiltersComponent } from './search-list-right-filters/search-list-right-filters.component';

import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule,
    SearchRoutingModule,
    BrowserAnimationsModule,
    
  ],
  exports: [HomePageComponent],
  declarations: [HomePageComponent, SearchComponent, SearchListComponent, SearchListLeftFiltersComponent, SearchListRightFiltersComponent],
  providers: [SearchService]
})
export class SearchModule { }
