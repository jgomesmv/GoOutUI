import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchListRightFiltersComponent } from './search-list-right-filters.component';

describe('SearchListRightFiltersComponent', () => {
  let component: SearchListRightFiltersComponent;
  let fixture: ComponentFixture<SearchListRightFiltersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchListRightFiltersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchListRightFiltersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
