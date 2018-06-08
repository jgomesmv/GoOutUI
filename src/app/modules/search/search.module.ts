import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
// import {MatButtonModule, MatCheckboxModule} from '@angular/material';

import { SearchRoutingModule } from './search-routing.module';

import { HomePage } from './pages/home/home.page';
import { SearchComponent } from './components/search/search.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchListLeftFiltersComponent } from './components/search-list-left-filters/search-list-left-filters.component';
import { SearchListRightFiltersComponent } from './components/search-list-right-filters/search-list-right-filters.component';

import { SearchService } from './search.service';

@NgModule({
  imports: [
    //CommonModule,
    SearchRoutingModule,
    //BrowserAnimationsModule    
  ],
  //exports: [HomePageComponent],
  declarations: [
    HomePage, 
    SearchComponent, 
    SearchListComponent, 
    SearchListLeftFiltersComponent, 
    SearchListRightFiltersComponent
  ],
  providers: [SearchService]
})
export class SearchModule { }
