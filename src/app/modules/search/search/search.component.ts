import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Select with multiple selection */
@Component({
  selector: 'search-component',
  templateUrl: 'search-component.html',
  styleUrls: ['search-component.css'],
})
export class SearchComponent {
  locations = new FormControl();
  locationsList = ['All Lisbon', 'Chiado Lisbon', 'Alfama Lisbon', 'Bairro Alto Lisbon'];

  toDos = new FormControl();
  toDosList = ['Place to eat', 'Place to drink', 'Place to have fun'];

  onSubmit(value: any) {
    console.log('Search form submited!');
    console.log(value);
  }
}
