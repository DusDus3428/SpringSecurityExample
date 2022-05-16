import {Component, Input, OnChanges} from '@angular/core';
import {MissingDataMessageReasonEnum} from '../../helpers/missing-data-message-reason.enum';

@Component({
  selector: 'app-missing-data-message',
  templateUrl: './missing-data-message.component.html',
  styleUrls: ['./missing-data-message.component.scss']
})
export class MissingDataMessageComponent implements OnChanges {
  @Input()
  missingDataMessageReason: string;

  showUnauthenticatedMessage: boolean = false;
  showUnauthorizedMessage: boolean = false;
  showDataNotFetchedMessage: boolean = false;

  constructor() { }

  ngOnChanges(): void {
    switch (this.missingDataMessageReason) {
      case MissingDataMessageReasonEnum.USER_UNAUTHENTICATED:
        this.showUnauthenticatedMessage = true;
        break;
      case MissingDataMessageReasonEnum.USER_UNAUTHORIZED:
        this.showUnauthorizedMessage = true;
        break;
      case MissingDataMessageReasonEnum.NO_DATA_FETCHED:
        this.showDataNotFetchedMessage = true;
        break;
    }
  }

}
