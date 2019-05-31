import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';
import { Draggable, Sortable, Plugins } from '@shopify/draggable';

declare var $;

@Component({
  selector: '[text]',
  templateUrl: './text.component.html',
  styleUrls: ['./text.component.scss']
})
export class TextComponent implements OnDestroy {

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

  txtStyle(){
    let txtStyle = {
      'background-color': this.model.backgroundColor,
      'color': this.model.color,
      'border': this.model.border,
      'font': this.model.font,
      'font-size.px': this.model.fontSize,
      'width.%': this.model.width,
      'height.%': this.model.height
    }
    return txtStyle;
  }
}