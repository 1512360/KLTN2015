import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { Observable, throwError } from 'rxjs';
import { map, catchError, timeout, share } from 'rxjs/operators';

import { EventStreamService, BackendService, CacheService, SeoService } from '../shared';

@Component({
  selector: 'editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {

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
