import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';
import { Draggable, Sortable, Plugins } from '@shopify/draggable';
import { Control } from './control.service';


export class Page {
  public type = 'page';
  public id;
  public name;

  public header: Header = new Header();
  public body: Body = new Body();



  //public link_background = '';
}

export class Header {
  public title;

  public scripts;
  public css;
}

export class Body {
  public controls: Control[] = [];
}
