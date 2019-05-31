import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';
import { Section } from '../modal/page.service';

declare var $;
declare var InlineEditor;

@Component({
  selector: 'page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class PageComponent implements OnDestroy {

  loading = true;
  currentPage;
  sections = [];

  constructor(private backendService: BackendService,
    private eventStreamService: EventStreamService,
    private cacheService: CacheService,
    private route: ActivatedRoute,
    private notifyService: NotifyService) {

    this.loading = false;

    this.eventStreamService.on('changePage').subscribe(event => {
      this.currentPage = event;
    });

    setTimeout(() => {
      this.render();
    }, 500);
  }

  ngOnDestroy() {
  }

  render() {
    this.addSection(3);
  }

  addSection(n) {
    console.log('hello');
    for (var i = 0; i < n; i++){
      let s = new Section();
      s.name = 'New Section';
      s.height = 30;
      this.sections.push(s);
    }
    console.log(this.sections);
  }
}