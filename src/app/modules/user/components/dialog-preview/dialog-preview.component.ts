import { Component, Input } from '@angular/core';
import { Dialog } from '../../models/models';
import { DialogsService } from '../../services/dialogs.service';

@Component({
  selector: 'app-dialog-preview',
  templateUrl: './dialog-preview.component.html',
  styleUrls: ['./dialog-preview.component.scss']
})
export class DialogPreviewComponent {
  @Input() private dialog: Dialog;

  constructor(private dialogsService: DialogsService) {}

  public get date(): string {
    return this.dialog.date;
  }
  public get sender(): string {
    return this.dialog.sender;
  }
  public get lastMessage(): string {
    return this.dialog.messages[this.dialog.messages.length - 1];
  }

  public get dialogId(): string {
    return this.dialog.id;
  }

  public emitSelectedDialogId(): void {
    this.dialogsService.selectedDialogId$.next(this.dialogId);
  }
}
