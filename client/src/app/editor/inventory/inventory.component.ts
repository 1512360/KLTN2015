import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';
import { Draggable, Sortable, Plugins } from '@shopify/draggable';
import { Page } from '../modal/page.service';
import { Button, Image, Text, Section } from '../modal/control.service';
import { colSize } from '../modal/gridViews.item';

@Component({
  selector: 'inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss']
})
export class InventoryComponent implements OnDestroy {

  loading = true;
  pages = [];
  controlStack = [];
  state = 'page';
  currentPage;
  currentControl;
  colSizeItems = colSize;
  

  constructor(private backendService: BackendService,
    private eventStreamService: EventStreamService,
    private cacheService: CacheService,
    private route: ActivatedRoute,
    private notifyService: NotifyService) {

    this.loading = false;

    this.eventStreamService.on('selectControl').subscribe(event => {
      this.currentControl = event;
    });

    setTimeout(() => {
      this.render();
    }, 500);
  }

  ngOnDestroy() {
  }

  render() {
    console.log();
  }

  addPage() {
    let p = new Page();
    p.name = 'Blank Page';
    p.id = this.backendService.guid();
    this.pages.push(p);
  }

  addSection() {
    let s = new Section();
    s.name = 'Blank Section';
    s.id = this.backendService.guid();
    if (this.currentControl) {
      this.currentControl.controls.push(s);
    } else if (this.currentPage) {
      this.currentPage.body.controls.push(s);
    }
  }

  selectHome() {
    this.currentPage = null;
    this.currentControl = null;
    this.controlStack = [];
  }

  selectPage(p) {
    this.currentPage = p;
    if (this.currentControl) {
      this.currentControl.selected = false;
    }
    this.currentControl = null;
    this.controlStack = [];
    this.eventStreamService.trigger('selectPage', p);
  }

  selectControl(s) {
    if (this.currentControl) {
      this.currentControl.selected = false;
    }
    this.currentControl = s;
    this.currentControl.selected = true;
    this.getControlStack();
    this.eventStreamService.trigger('selectControl', s);
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

  addControl(type) {
    let control;
    if (type == 'button') {
      control = new Button();
      control.name = 'Button';
      control.id = this.backendService.guid();
    } else if (type == 'image') {
      control = new Image();
      control.name = 'Image';
      control.id = this.backendService.guid();
    } else if (type == 'text') {
      control = new Text();
      control.name = 'Text';
      control.id = this.backendService.guid();
    }
    if (control) {
      if (this.currentControl) {
        this.currentControl.controls.push(control);
      } else if (this.currentPage) {
        this.currentPage.body.controls.push(control);
      }
    }
  }

}