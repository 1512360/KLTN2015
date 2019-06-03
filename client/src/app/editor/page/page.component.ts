import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';

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
  currentControl;
  controlStack = [];

  constructor(private backendService: BackendService,
    private eventStreamService: EventStreamService,
    private cacheService: CacheService,
    private route: ActivatedRoute,
    private notifyService: NotifyService) {

    this.loading = false;

    this.eventStreamService.on('selectPage').subscribe(event => {
      this.currentPage = event;
    });

    setTimeout(() => {
      this.render();
    }, 500);
  }

  ngOnDestroy() {
  }

  render() {
  }

  selectControl(c) {
    if (this.currentControl) {
      this.currentControl.selected = false;
    }
    this.currentControl = c;
    this.currentControl.selected = true;
    this.getControlStack();
    this.eventStreamService.trigger('selectControl', c);
  }

  getControlStack() {
    if (this.currentControl) {
      if (this.controlStack.indexOf(this.currentControl) > -1) {
        this.controlStack.slice(0, this.controlStack.indexOf(this.currentControl));
      } else {
        this.controlStack.push(this.currentControl);
      }
    }
  }
}