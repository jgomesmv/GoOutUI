import { Injectable } from '@angular/core';
import { Search } from '../search/components/search/search';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor() { }

  search(searchData: Search) {
    // RequestDataFromAPI
    // Pass data to searchList component
  }
}
