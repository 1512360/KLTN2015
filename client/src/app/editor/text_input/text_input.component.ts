import { Component, OnInit, OnDestroy, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';

declare var $;
declare var InlineEditor;

@Component({
  selector: '[text_input]',
  templateUrl: './text_input.component.html',
  styleUrls: ['./text_input.component.scss']
})
export class TextInputComponent implements OnDestroy {

  
  @Input() model;

  loading = true;

  constructor(private backendService: BackendService,
    private eventStreamService: EventStreamService,
    private cacheService: CacheService,
    private route: ActivatedRoute,
    private notifyService: NotifyService) {

    this.loading = false;

    setTimeout(() => {
      this.render();
    }, 500);
  }

  ngOnDestroy() {
  }

  render() {
  }
}