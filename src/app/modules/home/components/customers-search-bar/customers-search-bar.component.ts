import { EventEmitter, OnDestroy, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { debounceTime } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-customers-search-bar',
  templateUrl: './customers-search-bar.component.html',
  styleUrls: ['./customers-search-bar.component.scss']
})
export class CustomersSearchBarComponent implements OnInit, OnDestroy {

  @Output() getCustomers = new EventEmitter<string>();

  value = '';

  search$ = new Subject();
  private destroy$ = new Subject();

  constructor() { }

  ngOnInit(): void {
    this.search$
    .pipe(
      debounceTime(1000))
    .subscribe(() => this.search());
  }

  search(): void {
    this.getCustomers.emit(this.value);
  }

  ngOnDestroy(): void {
    this.destroy$.next()
    this.destroy$.complete()
  }

}
