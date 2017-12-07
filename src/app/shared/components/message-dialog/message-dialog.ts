import { MatDialog } from '@angular/material';

import { MessageDialogComponent } from './message-dialog.component';

export class MessageDialog {

  constructor(private _dialog: MatDialog) {}

  showModal(data) {
    this._dialog.open(MessageDialogComponent, {data: data});
  }

}
