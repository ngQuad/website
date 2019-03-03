import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocationItemComponent } from './location-item.component';

describe('LocationItemComponent', () => {
  let component: LocationItemComponent;
  let fixture: ComponentFixture<LocationItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocationItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocationItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
