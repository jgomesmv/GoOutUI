import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CommonModule } from '@angular/common';

import { SearchRoutingModule } from '../../modules/search/search-routing.module';
import { MaterialModule } from '../../infrastructure/material/material.module';

import { IndexPage } from './pages/index/index.page';
import { SearchComponent } from './components/search/search.component';
import { SearchListComponent } from './components/search-list/search-list.component';
import { SearchListLeftFiltersComponent } from './components/search-list-left-filters/search-list-left-filters.component';
import { SearchListRightFiltersComponent } from './components/search-list-right-filters/search-list-right-filters.component';

import { SearchService } from './search.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    MaterialModule,    
    SearchRoutingModule
  ],
  exports: [],
  declarations: [
    IndexPage, 
    SearchComponent, 
    SearchListComponent, 
    SearchListLeftFiltersComponent, 
    SearchListRightFiltersComponent
  ],
  providers: [SearchService]
})
export class SearchModule { }
