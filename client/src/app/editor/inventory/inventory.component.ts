import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';
import { Draggable, Sortable, Plugins } from '@shopify/draggable';
import { Page } from '../modal/page.service';
import { Button, Image, Text } from '../modal/control.service';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnDestroy {
  
  loading = true;
  pages = [];
  state = 'page';
  currentPage; 

  constructor(private backendService: BackendService,
    private eventStreamService: EventStreamService,
    private cacheService: CacheService,
    private route: ActivatedRoute,
    private notifyService: NotifyService) {

    this.loading = false;
  }

  ngOnDestroy() {
  }

  addPage() {
    let p = new Page();
    p.name = 'Blank Page';
    this.pages.push(p);
  }

  changePage(p) {
    this.currentPage = p;
    this.eventStreamService.trigger('changePage', p);
  }

  changeTab(tab) {
    this.state = tab;
  }

  addControl(type){
    if (type == 'button'){
      let btn = new Button();
      btn.id = this.backendService.guid();
      this.currentPage.body.controls.push(btn);
    }else if (type == 'image'){
      let img = new Image();
      img.id = this.backendService.guid();
      this.currentPage.body.controls.push(img);
    }else if (type == 'text'){
      let txt = new Text();
      txt.id = this.backendService.guid();
      this.currentPage.body.controls.push(txt);
    }
  }

}