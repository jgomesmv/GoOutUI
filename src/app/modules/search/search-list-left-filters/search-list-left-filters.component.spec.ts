import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListLeftFiltersComponent } from './search-list-left-filters.component';

describe('SearchListLeftFiltersComponent', () => {
  let component: SearchListLeftFiltersComponent;
  let fixture: ComponentFixture<SearchListLeftFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchListLeftFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListLeftFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
