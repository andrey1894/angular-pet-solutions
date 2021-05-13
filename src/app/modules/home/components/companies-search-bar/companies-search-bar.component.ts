import { EventEmitter, OnDestroy, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { filter, debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-companies-search-bar',
  templateUrl: './companies-search-bar.component.html',
  styleUrls: ['./companies-search-bar.component.scss']
})
export class CompaniesSearchBarComponent implements OnInit, OnDestroy {

  @Output() getCompanies = new EventEmitter<string>();

  value = '';

  search$ = new Subject();
  private destroy$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.search$
    .pipe(
      filter(() => this.value.length >= 3),
      debounceTime(1000))
    .subscribe(() => this.search());
  }

  search(): void {
    this.getCompanies.emit(this.value);
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
