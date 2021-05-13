import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ActivationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  pageTitle = '';

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.router.events.subscribe(data => {
      if (data instanceof ActivationStart) {
        this.pageTitle = data.snapshot.data?.title
      }
    });
  }

}
