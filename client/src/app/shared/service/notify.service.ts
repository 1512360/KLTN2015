import { Injectable } from '@angular/core';

import { EventStreamService } from '../../shared/service/event-stream.service';

declare var PNotify: any;

@Injectable()
export class NotifyService {

  constructor() {
  }

  public error(evt) {
    new PNotify({
      type: 'error',
      title: "Alert",
      text: evt.message || 'Something is wrong! Please try again.',
      styling: 'bootstrap3',
      delay: 5000
    });
  }

  public success(evt) {
    new PNotify({
      type: 'success',
      title: "Success",
      text: evt.message,
      styling: 'bootstrap3',
      delay: 5000
    });
  }

}
