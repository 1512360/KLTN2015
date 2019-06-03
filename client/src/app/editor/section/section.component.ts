import { Component, OnInit, OnDestroy, Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';

declare var $;
declare var InlineEditor;

@Component({
  selector: '[section]',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})
export class SectionComponent implements OnDestroy {

  @Input() model;
  currentControl;
  controlStack = [];

  constructor(private backendService: BackendService,
    private eventStreamService: EventStreamService,
    private cacheService: CacheService,
    private route: ActivatedRoute,
    private notifyService: NotifyService) {

  }

  ngOnDestroy() {
  }

  render() {
  }

  sectionStyle() {
    let sectionStyle = {
      'border': "dash 1px",
    }
    return sectionStyle;
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