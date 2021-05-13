import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompaniesSearchResultsComponent } from './companies-search-results.component';

describe('CompaniesSearchResultsComponent', () => {
  let component: CompaniesSearchResultsComponent;
  let fixture: ComponentFixture<CompaniesSearchResultsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompaniesSearchResultsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompaniesSearchResultsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
