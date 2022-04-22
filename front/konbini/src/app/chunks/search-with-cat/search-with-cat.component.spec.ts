import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchWithCatComponent } from './search-with-cat.component';

describe('SearchWithCatComponent', () => {
  let component: SearchWithCatComponent;
  let fixture: ComponentFixture<SearchWithCatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchWithCatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchWithCatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
