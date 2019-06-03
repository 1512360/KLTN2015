import { Component, OnInit, OnDestroy, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';

declare var $;
declare var InlineEditor;

@Component({
  selector: '[select]',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent implements OnDestroy {


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

  btnStyle() {
    let btnStyle = {
      'background-color': this.model.color,
      'font': this.model.font,
      'font-size.px': this.model.fontSize,
      'color': this.model.textColor,
      'top.px': this.model.x,
      'left.px': this.model.y,
    };
    return btnStyle;
  }
}
