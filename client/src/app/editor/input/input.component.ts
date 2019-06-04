import { Component, OnInit, OnDestroy, Input, HostListener } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';

declare var $;
declare var InlineEditor;

@Component({
  selector: '[file_input]',
  templateUrl: './file_input.component.html',
  styleUrls: ['./file_input.component.scss']
})
export class FileInputComponent implements OnDestroy {


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

  inputStyle() {
    let inputStyle = {
      'id' : this.model.id,
      'name' : this.model.name,
      'value' : this.model.value,
      'label' : this.model.label,
      'type' : this.model.type,
      'top.px': this.model.x,
      'left.px': this.model.y,
    };
    return inputStyle;
  }
}
