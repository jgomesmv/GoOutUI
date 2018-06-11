import {Component} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';

function maxLengthValidator(control: FormControl): { [s: string]: boolean } {
  if ((control.value.length > 10)) {
    return {maxLength: true};
  }
}

@Component({
  selector: 'search-component',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})

export class SearchComponent {
  searchForm: FormGroup;

  constructor(formBuilder: FormBuilder) {
    this.searchForm = formBuilder.group({
      'locations':  ['', Validators.required],
      'toDos':  ['', Validators.required],
      'searchText':  ['', Validators.compose([
        Validators.required, 
        Validators.minLength(4), 
        maxLengthValidator])]
    });
  }

  locationsList = ['All Lisbon', 'Chiado Lisbon', 'Alfama Lisbon', 'Bairro Alto Lisbon'];
  toDosList = ['Place to eat', 'Place to drink', 'Place to have fun'];

  onSubmit(form: any) {
    console.log('Search form submited!');
    console.log(form);
  }
}
