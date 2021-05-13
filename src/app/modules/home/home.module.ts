import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { CompaniesSearchBarComponent, CompaniesSearchResultsComponent } from './components';

@NgModule({
  declarations: [
    HomeComponent,
    CompaniesSearchBarComponent,
    CompaniesSearchResultsComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    HomeRoutingModule,
  ]
})
export class HomeModule { }
