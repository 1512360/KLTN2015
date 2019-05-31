import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';
import { Draggable, Sortable, Plugins } from '@shopify/draggable';

export class Control {
    public id;
    public name;
}



export class Button extends Control {
    public type = 'button';
    public label = 'button';
    public color = '#17a2b8';
    public font;
    public fontSize;
    public textColor = '#FFF';
    public width = 30;
    public height = 30;
    public x;
    public y;
    public link;
}

export class Text extends Control {
    public type = 'text';
    public color = '#000';
    public textArea = 'Text Here';
    public border = "dashed 1px";
    public font;
    public fontSize;
    public backgroundColor = '#FFF';
    public width = 30;
    public height = 30;
    public x;
    public y;
}

export class Image extends Control {
    public type = 'image';
    public width;
    public height;
    public x;
    public y;
    public link;
}