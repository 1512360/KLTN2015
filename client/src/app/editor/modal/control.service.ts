import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EventStreamService, BackendService, CacheService, NotifyService } from '../../shared';
import { Draggable, Sortable, Plugins } from '@shopify/draggable';

export class Control {
    public id;
    public name;
    public selected = false;
    public hovered = false;
}



export class Section extends Control {
    public type = 'section';
    public id;
    public name;
    public float_left;
    public sizeGridView = '';
    public controls: Control[] = [];
}

export class Button extends Control {
    public type = 'button';
    public label = 'button';
    public color = '#17a2b8';
    public font;
    public fontSize;
    public textColor = '#FFF';
    public size = '';
    public x = 0;
    public y = 0;
    public link;
}

export class Text_input extends Control {
  public type = 'text_input';
  public label = 'text input';
}

export class Number_input extends Control {
  public type = 'number_input';
  public label = 'number input';
}

export class File_input extends Control {
  public type = 'file_input';
  public label = 'file input';
}

export class Checkbox extends Control {
  public type = 'checkbox';
  public label = 'checkbox';
}

export class Radio extends Control {
  public type = 'radio';
  public label = 'radio';
}

export class Select extends Control {
  public type = 'select';
  public label = 'select';
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
