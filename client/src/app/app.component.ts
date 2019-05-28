import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { environment } from '../environments/environment';

import { EventStreamService, BackendService, CacheService, SeoService } from './shared';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  loading: boolean = true;

  constructor(private backendService: BackendService,
    private eventStreamService: EventStreamService,
    private cacheService: CacheService,
    private router: Router,
    private seo: SeoService) {
      
    this.loading = false;
  }

  ngOnInit() {
  }
}
