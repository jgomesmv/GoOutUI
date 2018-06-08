import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaceToDrinkComponent } from './place-to-drink.component';

describe('PlaceToDrinkComponent', () => {
  let component: PlaceToDrinkComponent;
  let fixture: ComponentFixture<PlaceToDrinkComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlaceToDrinkComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlaceToDrinkComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
