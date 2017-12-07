import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'sn-message-dialog',
  templateUrl: './message-dialog.component.html'
})
export class MessageDialogComponent {

  constructor(private router: Router,
              private matDialogRef: MatDialogRef<MessageDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data: any) {}

  close(data) {
    this.matDialogRef.close();

    if (data.navigate) {
      this.router.navigate([data.navigateLink]);
    }
  }

}
