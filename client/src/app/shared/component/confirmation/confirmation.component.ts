import { Component, OnInit } from '@angular/core';
import { EventStreamService } from '../../service/event-stream.service';

declare var jQuery: any;
declare var X: any;

@Component({
  selector: 'confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.scss']
})
export class ConfirmationComponent {

  title: string = '';
  message: string = '';
  type: string = 'yesno';
  okEvent: any = '';
  cancelEvent: any = '';
  processing: boolean = false;

  constructor(private eventStreamService: EventStreamService) {

    this.eventStreamService.on('show-confirmation')
      .subscribe(evt => {
        this.title = evt.title;
        this.message = evt.message;
        this.type = evt.type;
        this.okEvent = evt.okEvent;
        this.cancelEvent = evt.cancelEvent;
        this.processing = false;
        this.eventStreamService.trigger('open-modal', 'confirmation-modal');
      });

    this.eventStreamService.on('hide-confirmation')
      .subscribe(evt => {
        this.processing = false;
        this.eventStreamService.trigger('close-modal', 'confirmation-modal');
      });
  }

  private ok() {
    this.processing = true;
    this.eventStreamService.trigger(this.okEvent.event, this.okEvent.data);
    if (!this.okEvent.event) {
      this.eventStreamService.trigger('close-modal', 'confirmation-modal');
    }
  }

  private cancel() {
    this.processing = false;
    this.eventStreamService.trigger(this.cancelEvent.event, this.cancelEvent.data);
    this.eventStreamService.trigger('close-modal', 'confirmation-modal');
  }
}
